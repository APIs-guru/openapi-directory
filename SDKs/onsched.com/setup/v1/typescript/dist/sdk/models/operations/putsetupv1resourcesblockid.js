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
var PutSetupV1ResourcesBlockIdPathParams = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesBlockIdPathParams, _super);
    function PutSetupV1ResourcesBlockIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesBlockIdPathParams.prototype, "id", void 0);
    return PutSetupV1ResourcesBlockIdPathParams;
}(SpeakeasyBase));
export { PutSetupV1ResourcesBlockIdPathParams };
var PutSetupV1ResourcesBlockIdRequests = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesBlockIdRequests, _super);
    function PutSetupV1ResourcesBlockIdRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ResourceBlockUpdateModel)
    ], PutSetupV1ResourcesBlockIdRequests.prototype, "resourceBlockUpdateModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceBlockUpdateModel)
    ], PutSetupV1ResourcesBlockIdRequests.prototype, "resourceBlockUpdateModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ResourceBlockUpdateModel)
    ], PutSetupV1ResourcesBlockIdRequests.prototype, "resourceBlockUpdateModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ResourceBlockUpdateModel)
    ], PutSetupV1ResourcesBlockIdRequests.prototype, "resourceBlockUpdateModel3", void 0);
    return PutSetupV1ResourcesBlockIdRequests;
}(SpeakeasyBase));
export { PutSetupV1ResourcesBlockIdRequests };
var PutSetupV1ResourcesBlockIdRequest = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesBlockIdRequest, _super);
    function PutSetupV1ResourcesBlockIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesBlockIdPathParams)
    ], PutSetupV1ResourcesBlockIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutSetupV1ResourcesBlockIdRequests)
    ], PutSetupV1ResourcesBlockIdRequest.prototype, "request", void 0);
    return PutSetupV1ResourcesBlockIdRequest;
}(SpeakeasyBase));
export { PutSetupV1ResourcesBlockIdRequest };
var PutSetupV1ResourcesBlockIdResponse = /** @class */ (function (_super) {
    __extends(PutSetupV1ResourcesBlockIdResponse, _super);
    function PutSetupV1ResourcesBlockIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutSetupV1ResourcesBlockIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceBlockViewModel)
    ], PutSetupV1ResourcesBlockIdResponse.prototype, "resourceBlockViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutSetupV1ResourcesBlockIdResponse.prototype, "statusCode", void 0);
    return PutSetupV1ResourcesBlockIdResponse;
}(SpeakeasyBase));
export { PutSetupV1ResourcesBlockIdResponse };
