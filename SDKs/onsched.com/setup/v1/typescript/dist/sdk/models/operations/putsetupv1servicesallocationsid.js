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
var PutSetupV1ServicesAllocationsIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesAllocationsIdPathParams, _super);
    function PutSetupV1ServicesAllocationsIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ServicesAllocationsIdPathParams.prototype, "id", void 0);
    return PutSetupV1ServicesAllocationsIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1ServicesAllocationsIdPathParams };
var PutSetupV1ServicesAllocationsIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesAllocationsIdRequests, _super);
    function PutSetupV1ServicesAllocationsIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ServiceAllocationUpdateModel)
    ], PutSetupV1ServicesAllocationsIdRequests.prototype, "serviceAllocationUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServiceAllocationUpdateModel)
    ], PutSetupV1ServicesAllocationsIdRequests.prototype, "serviceAllocationUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ServiceAllocationUpdateModel)
    ], PutSetupV1ServicesAllocationsIdRequests.prototype, "serviceAllocationUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ServiceAllocationUpdateModel)
    ], PutSetupV1ServicesAllocationsIdRequests.prototype, "serviceAllocationUpdateModel3", void 0);
    return PutSetupV1ServicesAllocationsIdRequests;
}(SpeakeasyBase));
export { PutSetupV1ServicesAllocationsIdRequests };
var PutSetupV1ServicesAllocationsIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesAllocationsIdRequest, _super);
    function PutSetupV1ServicesAllocationsIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ServicesAllocationsIdPathParams)
    ], PutSetupV1ServicesAllocationsIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ServicesAllocationsIdRequests)
    ], PutSetupV1ServicesAllocationsIdRequest.prototype, "request", void 0);
    return PutSetupV1ServicesAllocationsIdRequest;
}(SpeakeasyBase));
export { PutSetupV1ServicesAllocationsIdRequest };
var PutSetupV1ServicesAllocationsIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ServicesAllocationsIdResponse, _super);
    function PutSetupV1ServicesAllocationsIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ServicesAllocationsIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceAllocationViewModel)
    ], PutSetupV1ServicesAllocationsIdResponse.prototype, "serviceAllocationViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ServicesAllocationsIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1ServicesAllocationsIdResponse;
}(SpeakeasyBase));
export { PutSetupV1ServicesAllocationsIdResponse };
