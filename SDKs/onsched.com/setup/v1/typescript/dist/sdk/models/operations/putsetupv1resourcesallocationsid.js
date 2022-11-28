var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
var PutSetupV1ResourcesAllocationsIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesAllocationsIdPathParams, _super);
    function PutSetupV1ResourcesAllocationsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesAllocationsIdPathParams.prototype, "id", void 0);
    return PutSetupV1ResourcesAllocationsIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesAllocationsIdPathParams };
var PutSetupV1ResourcesAllocationsIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesAllocationsIdRequests, _super);
    function PutSetupV1ResourcesAllocationsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ResourceAllocationUpdateModel)
    ], PutSetupV1ResourcesAllocationsIdRequests.prototype, "resourceAllocationUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceAllocationUpdateModel)
    ], PutSetupV1ResourcesAllocationsIdRequests.prototype, "resourceAllocationUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ResourceAllocationUpdateModel)
    ], PutSetupV1ResourcesAllocationsIdRequests.prototype, "resourceAllocationUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ResourceAllocationUpdateModel)
    ], PutSetupV1ResourcesAllocationsIdRequests.prototype, "resourceAllocationUpdateModel3", void 0);
    return PutSetupV1ResourcesAllocationsIdRequests;
}(SpeakeasyBase));
export { PutSetupV1ResourcesAllocationsIdRequests };
var PutSetupV1ResourcesAllocationsIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesAllocationsIdRequest, _super);
    function PutSetupV1ResourcesAllocationsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesAllocationsIdPathParams)
    ], PutSetupV1ResourcesAllocationsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesAllocationsIdRequests)
    ], PutSetupV1ResourcesAllocationsIdRequest.prototype, "request", void 0);
    return PutSetupV1ResourcesAllocationsIdRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcesAllocationsIdRequest };
var PutSetupV1ResourcesAllocationsIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesAllocationsIdResponse, _super);
    function PutSetupV1ResourcesAllocationsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesAllocationsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceBlockViewModel)
    ], PutSetupV1ResourcesAllocationsIdResponse.prototype, "resourceBlockViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcesAllocationsIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcesAllocationsIdResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcesAllocationsIdResponse };
