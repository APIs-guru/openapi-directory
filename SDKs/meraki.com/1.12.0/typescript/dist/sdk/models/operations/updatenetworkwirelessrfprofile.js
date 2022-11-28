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
var UpdateNetworkWirelessRfProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessRfProfilePathParams, _super);
    function UpdateNetworkWirelessRfProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessRfProfilePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rfProfileId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessRfProfilePathParams.prototype, "rfProfileId", void 0);
    return UpdateNetworkWirelessRfProfilePathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessRfProfilePathParams };
export var UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
(function (UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum) {
    UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum["Dual"] = "dual";
    UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum["Two4ghz"] = "2.4ghz";
    UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum["Fiveghz"] = "5ghz";
})(UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum || (UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum = {}));
// UpdateNetworkWirelessRfProfileRequestBodyApBandSettings
/**
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
var UpdateNetworkWirelessRfProfileRequestBodyApBandSettings = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessRfProfileRequestBodyApBandSettings, _super);
    function UpdateNetworkWirelessRfProfileRequestBodyApBandSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandOperationMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessRfProfileRequestBodyApBandSettings.prototype, "bandOperationMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandSteeringEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessRfProfileRequestBodyApBandSettings.prototype, "bandSteeringEnabled", void 0);
    return UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;
}(SpeakeasyBase));
export { UpdateNetworkWirelessRfProfileRequestBodyApBandSettings };
export var UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
(function (UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum) {
    UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum["Ssid"] = "ssid";
    UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum["Ap"] = "ap";
})(UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum || (UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum = {}));
// UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
/**
 * Settings related to 5Ghz band
**/
var UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings, _super);
    function UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelWidth" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "channelWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPower" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "maxPower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minBitrate" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "minBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minPower" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "minPower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rxsop" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "rxsop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validAutoChannels" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings.prototype, "validAutoChannels", void 0);
    return UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
}(SpeakeasyBase));
export { UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings };
export var UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
(function (UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum) {
    UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum["Band"] = "band";
    UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum["Ssid"] = "ssid";
})(UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum || (UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum = {}));
// UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
/**
 * Settings related to 2.4Ghz band
**/
var UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings, _super);
    function UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=axEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "axEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPower" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "maxPower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minBitrate" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "minBitrate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minPower" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "minPower", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rxsop" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "rxsop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=validAutoChannels" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings.prototype, "validAutoChannels", void 0);
    return UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}(SpeakeasyBase));
export { UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings };
var UpdateNetworkWirelessRfProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessRfProfileRequestBody, _super);
    function UpdateNetworkWirelessRfProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apBandSettings" }),
        __metadata("design:type", UpdateNetworkWirelessRfProfileRequestBodyApBandSettings)
    ], UpdateNetworkWirelessRfProfileRequestBody.prototype, "apBandSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bandSelectionType" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessRfProfileRequestBody.prototype, "bandSelectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientBalancingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessRfProfileRequestBody.prototype, "clientBalancingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fiveGhzSettings" }),
        __metadata("design:type", UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings)
    ], UpdateNetworkWirelessRfProfileRequestBody.prototype, "fiveGhzSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minBitrateType" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessRfProfileRequestBody.prototype, "minBitrateType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessRfProfileRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twoFourGhzSettings" }),
        __metadata("design:type", UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings)
    ], UpdateNetworkWirelessRfProfileRequestBody.prototype, "twoFourGhzSettings", void 0);
    return UpdateNetworkWirelessRfProfileRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessRfProfileRequestBody };
var UpdateNetworkWirelessRfProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessRfProfileRequest, _super);
    function UpdateNetworkWirelessRfProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessRfProfilePathParams)
    ], UpdateNetworkWirelessRfProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessRfProfileRequestBody)
    ], UpdateNetworkWirelessRfProfileRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessRfProfileRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessRfProfileRequest };
var UpdateNetworkWirelessRfProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessRfProfileResponse, _super);
    function UpdateNetworkWirelessRfProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessRfProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessRfProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessRfProfileResponse.prototype, "updateNetworkWirelessRfProfile200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessRfProfileResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessRfProfileResponse };
