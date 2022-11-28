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
var UpdateDeviceWirelessRadioSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessRadioSettingsPathParams, _super);
    function UpdateDeviceWirelessRadioSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceWirelessRadioSettingsPathParams.prototype, "serial", void 0);
    return UpdateDeviceWirelessRadioSettingsPathParams;
}(SpeakeasyBase));
export { UpdateDeviceWirelessRadioSettingsPathParams };
// UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings
/**
 * Manual radio settings for 5 GHz.
**/
var UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings, _super);
    function UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channelWidth" }),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings.prototype, "channelWidth", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPower" }),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings.prototype, "targetPower", void 0);
    return UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
}(SpeakeasyBase));
export { UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings };
// UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings
/**
 * Manual radio settings for 2.4 GHz.
**/
var UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings, _super);
    function UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetPower" }),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings.prototype, "targetPower", void 0);
    return UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
}(SpeakeasyBase));
export { UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings };
var UpdateDeviceWirelessRadioSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessRadioSettingsRequestBody, _super);
    function UpdateDeviceWirelessRadioSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fiveGhzSettings" }),
        __metadata("design:type", UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings)
    ], UpdateDeviceWirelessRadioSettingsRequestBody.prototype, "fiveGhzSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rfProfileId" }),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessRadioSettingsRequestBody.prototype, "rfProfileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=twoFourGhzSettings" }),
        __metadata("design:type", UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings)
    ], UpdateDeviceWirelessRadioSettingsRequestBody.prototype, "twoFourGhzSettings", void 0);
    return UpdateDeviceWirelessRadioSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceWirelessRadioSettingsRequestBody };
var UpdateDeviceWirelessRadioSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessRadioSettingsRequest, _super);
    function UpdateDeviceWirelessRadioSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceWirelessRadioSettingsPathParams)
    ], UpdateDeviceWirelessRadioSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceWirelessRadioSettingsRequestBody)
    ], UpdateDeviceWirelessRadioSettingsRequest.prototype, "request", void 0);
    return UpdateDeviceWirelessRadioSettingsRequest;
}(SpeakeasyBase));
export { UpdateDeviceWirelessRadioSettingsRequest };
var UpdateDeviceWirelessRadioSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessRadioSettingsResponse, _super);
    function UpdateDeviceWirelessRadioSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceWirelessRadioSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessRadioSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceWirelessRadioSettingsResponse.prototype, "updateDeviceWirelessRadioSettings200ApplicationJsonObject", void 0);
    return UpdateDeviceWirelessRadioSettingsResponse;
}(SpeakeasyBase));
export { UpdateDeviceWirelessRadioSettingsResponse };
