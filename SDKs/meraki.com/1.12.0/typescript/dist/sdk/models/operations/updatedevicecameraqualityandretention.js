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
var UpdateDeviceCameraQualityAndRetentionPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraQualityAndRetentionPathParams, _super);
    function UpdateDeviceCameraQualityAndRetentionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraQualityAndRetentionPathParams.prototype, "serial", void 0);
    return UpdateDeviceCameraQualityAndRetentionPathParams;
}(SpeakeasyBase));
export { UpdateDeviceCameraQualityAndRetentionPathParams };
export var UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;
(function (UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum) {
    UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum["Standard"] = "Standard";
    UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum["High"] = "High";
    UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum["Enhanced"] = "Enhanced";
})(UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum || (UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum = {}));
export var UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;
(function (UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum) {
    UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
    UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum["OneThousandAndEightyx1080"] = "1080x1080";
    UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum["TwoThousandAndFiftyEightx2058"] = "2058x2058";
})(UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum || (UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum = {}));
var UpdateDeviceCameraQualityAndRetentionRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraQualityAndRetentionRequestBody, _super);
    function UpdateDeviceCameraQualityAndRetentionRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioRecordingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceCameraQualityAndRetentionRequestBody.prototype, "audioRecordingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motionBasedRetentionEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceCameraQualityAndRetentionRequestBody.prototype, "motionBasedRetentionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motionDetectorVersion" }),
        __metadata("design:type", Number)
    ], UpdateDeviceCameraQualityAndRetentionRequestBody.prototype, "motionDetectorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileId" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraQualityAndRetentionRequestBody.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraQualityAndRetentionRequestBody.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateDeviceCameraQualityAndRetentionRequestBody.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedBandwidthModeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateDeviceCameraQualityAndRetentionRequestBody.prototype, "restrictedBandwidthModeEnabled", void 0);
    return UpdateDeviceCameraQualityAndRetentionRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceCameraQualityAndRetentionRequestBody };
var UpdateDeviceCameraQualityAndRetentionRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraQualityAndRetentionRequest, _super);
    function UpdateDeviceCameraQualityAndRetentionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceCameraQualityAndRetentionPathParams)
    ], UpdateDeviceCameraQualityAndRetentionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceCameraQualityAndRetentionRequestBody)
    ], UpdateDeviceCameraQualityAndRetentionRequest.prototype, "request", void 0);
    return UpdateDeviceCameraQualityAndRetentionRequest;
}(SpeakeasyBase));
export { UpdateDeviceCameraQualityAndRetentionRequest };
var UpdateDeviceCameraQualityAndRetentionResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceCameraQualityAndRetentionResponse, _super);
    function UpdateDeviceCameraQualityAndRetentionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceCameraQualityAndRetentionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceCameraQualityAndRetentionResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceCameraQualityAndRetentionResponse.prototype, "updateDeviceCameraQualityAndRetention200ApplicationJsonObject", void 0);
    return UpdateDeviceCameraQualityAndRetentionResponse;
}(SpeakeasyBase));
export { UpdateDeviceCameraQualityAndRetentionResponse };
