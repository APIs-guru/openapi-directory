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
var CreateNetworkCameraQualityRetentionProfilePathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfilePathParams, _super);
    function CreateNetworkCameraQualityRetentionProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfilePathParams.prototype, "networkId", void 0);
    return CreateNetworkCameraQualityRetentionProfilePathParams;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfilePathParams };
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["Standard"] = "Standard";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["Enhanced"] = "Enhanced";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum["High"] = "High";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = {}));
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = {}));
// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
/**
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72, _super);
    function CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72.prototype, "resolution", void 0);
    return CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 };
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["Standard"] = "Standard";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["Enhanced"] = "Enhanced";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum["High"] = "High";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = {}));
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = {}));
// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
/**
 * Quality and resolution for MV12WE camera models.
**/
var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We, _super);
    function CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We.prototype, "resolution", void 0);
    return CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We };
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["Standard"] = "Standard";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["Enhanced"] = "Enhanced";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum["High"] = "High";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = {}));
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = {}));
// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
/**
 * Quality and resolution for MV21/MV71 camera models.
**/
var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71, _super);
    function CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71.prototype, "resolution", void 0);
    return CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 };
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["Standard"] = "Standard";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["Enhanced"] = "Enhanced";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum["High"] = "High";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = {}));
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["OneThousandTwoHundredAndEightyx720"] = "1280x720";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["OneThousandNineHundredAndTwentyx1080"] = "1920x1080";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum["TwoThousandSixHundredAndEightyEightx1512"] = "2688x1512";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = {}));
// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
/**
 * Quality and resolution for MV22X/MV72X camera models.
**/
var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X, _super);
    function CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X.prototype, "resolution", void 0);
    return CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X };
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["Standard"] = "Standard";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["Enhanced"] = "Enhanced";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum["High"] = "High";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = {}));
export var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
(function (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum) {
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum["OneThousandAndEightyx1080"] = "1080x1080";
    CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum["TwoThousandAndFiftyEightx2058"] = "2058x2058";
})(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum || (CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = {}));
// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
/**
 * Quality and resolution for MV32 camera models.
**/
var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32, _super);
    function CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32.prototype, "quality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32.prototype, "resolution", void 0);
    return CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 };
// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
/**
 * Video quality and resolution settings for all the camera models.
**/
var CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings, _super);
    function CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV12/MV22/MV72" }),
        __metadata("design:type", CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv12Mv22Mv72", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV12WE" }),
        __metadata("design:type", CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv12We", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV21/MV71" }),
        __metadata("design:type", CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv21Mv71", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV22X/MV72X" }),
        __metadata("design:type", CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv22XMv72X", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MV32" }),
        __metadata("design:type", CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32)
    ], CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings.prototype, "mv32", void 0);
    return CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings };
var CreateNetworkCameraQualityRetentionProfileRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileRequestBody, _super);
    function CreateNetworkCameraQualityRetentionProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=audioRecordingEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "audioRecordingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cloudArchiveEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "cloudArchiveEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxRetentionDays" }),
        __metadata("design:type", Number)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "maxRetentionDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motionBasedRetentionEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "motionBasedRetentionEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motionDetectorVersion" }),
        __metadata("design:type", Number)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "motionDetectorVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restrictedBandwidthModeEnabled" }),
        __metadata("design:type", Boolean)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "restrictedBandwidthModeEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleId" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "scheduleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=videoSettings" }),
        __metadata("design:type", CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings)
    ], CreateNetworkCameraQualityRetentionProfileRequestBody.prototype, "videoSettings", void 0);
    return CreateNetworkCameraQualityRetentionProfileRequestBody;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileRequestBody };
var CreateNetworkCameraQualityRetentionProfileRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileRequest, _super);
    function CreateNetworkCameraQualityRetentionProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkCameraQualityRetentionProfilePathParams)
    ], CreateNetworkCameraQualityRetentionProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkCameraQualityRetentionProfileRequestBody)
    ], CreateNetworkCameraQualityRetentionProfileRequest.prototype, "request", void 0);
    return CreateNetworkCameraQualityRetentionProfileRequest;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileRequest };
var CreateNetworkCameraQualityRetentionProfileResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraQualityRetentionProfileResponse, _super);
    function CreateNetworkCameraQualityRetentionProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkCameraQualityRetentionProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkCameraQualityRetentionProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkCameraQualityRetentionProfileResponse.prototype, "createNetworkCameraQualityRetentionProfile200ApplicationJsonObject", void 0);
    return CreateNetworkCameraQualityRetentionProfileResponse;
}(SpeakeasyBase));
export { CreateNetworkCameraQualityRetentionProfileResponse };
