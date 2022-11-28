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
var DeleteNetworkCameraQualityRetentionProfilePathParams = /** @class */ (function (_super) {
    __extends(DeleteNetworkCameraQualityRetentionProfilePathParams, _super);
    function DeleteNetworkCameraQualityRetentionProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], DeleteNetworkCameraQualityRetentionProfilePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qualityRetentionProfileId" }),
        __metadata("design:type", String)
    ], DeleteNetworkCameraQualityRetentionProfilePathParams.prototype, "qualityRetentionProfileId", void 0);
    return DeleteNetworkCameraQualityRetentionProfilePathParams;
}(SpeakeasyBase));
export { DeleteNetworkCameraQualityRetentionProfilePathParams };
var DeleteNetworkCameraQualityRetentionProfileRequest = /** @class */ (function (_super) {
    __extends(DeleteNetworkCameraQualityRetentionProfileRequest, _super);
    function DeleteNetworkCameraQualityRetentionProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteNetworkCameraQualityRetentionProfilePathParams)
    ], DeleteNetworkCameraQualityRetentionProfileRequest.prototype, "pathParams", void 0);
    return DeleteNetworkCameraQualityRetentionProfileRequest;
}(SpeakeasyBase));
export { DeleteNetworkCameraQualityRetentionProfileRequest };
var DeleteNetworkCameraQualityRetentionProfileResponse = /** @class */ (function (_super) {
    __extends(DeleteNetworkCameraQualityRetentionProfileResponse, _super);
    function DeleteNetworkCameraQualityRetentionProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteNetworkCameraQualityRetentionProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteNetworkCameraQualityRetentionProfileResponse.prototype, "statusCode", void 0);
    return DeleteNetworkCameraQualityRetentionProfileResponse;
}(SpeakeasyBase));
export { DeleteNetworkCameraQualityRetentionProfileResponse };
