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
var UpdateNetworkCameraQualityRetentionProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfilePathParams, _super);
    function UpdateNetworkCameraQualityRetentionProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfilePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qualityRetentionProfileId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfilePathParams.prototype, "qualityRetentionProfileId", void 0);
    return UpdateNetworkCameraQualityRetentionProfilePathParams;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfilePathParams };
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = {}));
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
/**
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 };
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = {}));
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
/**
 * Quality and resolution for MV12WE camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We };
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = {}));
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
/**
 * Quality and resolution for MV21/MV71 camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 };
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = {}));
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["TwoThousandSixHundredAndEightyEightx1512"] = "2688x1512";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
/**
 * Quality and resolution for MV22X/MV72X camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X };
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["Standard"] = "Standard";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["Enhanced"] = "Enhanced";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["High"] = "High";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = {}));
export var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
(function (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum) {
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum["OneThousandAndEightyx1080"] = "1080x1080";
    UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum["TwoThousandAndFiftyEightx2058"] = "2058x2058";
})(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum || (UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = {}));
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
/**
 * Quality and resolution for MV32 camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32.prototype, "resolution", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 };
// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
/**
 * Video quality and resolution settings for all the camera models.
**/
var UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV12/MV22/MV72" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv12Mv22Mv72", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV12WE" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv12We", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV21/MV71" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv21Mv71", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV22X/MV72X" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv22XMv72X", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV32" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv32", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings };
var UpdateNetworkCameraQualityRetentionProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequestBody, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioRecordingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "audioRecordingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudArchiveEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "cloudArchiveEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRetentionDays" }),
        __metadata("design:type", Number)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "maxRetentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motionBasedRetentionEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "motionBasedRetentionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motionDetectorVersion" }),
        __metadata("design:type", Number)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "motionDetectorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedBandwidthModeEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "restrictedBandwidthModeEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "scheduleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoSettings" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings)
    ], UpdateNetworkCameraQualityRetentionProfileRequestBody.prototype, "videoSettings", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileRequestBody };
var UpdateNetworkCameraQualityRetentionProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileRequest, _super);
    function UpdateNetworkCameraQualityRetentionProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfilePathParams)
    ], UpdateNetworkCameraQualityRetentionProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkCameraQualityRetentionProfileRequestBody)
    ], UpdateNetworkCameraQualityRetentionProfileRequest.prototype, "request", void 0);
    return UpdateNetworkCameraQualityRetentionProfileRequest;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileRequest };
var UpdateNetworkCameraQualityRetentionProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraQualityRetentionProfileResponse, _super);
    function UpdateNetworkCameraQualityRetentionProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkCameraQualityRetentionProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkCameraQualityRetentionProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkCameraQualityRetentionProfileResponse.prototype, "updateNetworkCameraQualityRetentionProfile200ApplicationJsonObject", void 0);
    return UpdateNetworkCameraQualityRetentionProfileResponse;
}(SpeakeasyBase));
export { UpdateNetworkCameraQualityRetentionProfileResponse };
