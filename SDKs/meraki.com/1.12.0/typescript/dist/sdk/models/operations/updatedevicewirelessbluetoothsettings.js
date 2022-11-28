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
var UpdateDeviceWirelessBluetoothSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessBluetoothSettingsPathParams, _super);
    function UpdateDeviceWirelessBluetoothSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" }),
        __metadata("design:type", String)
    ], UpdateDeviceWirelessBluetoothSettingsPathParams.prototype, "serial", void 0);
    return UpdateDeviceWirelessBluetoothSettingsPathParams;
}(SpeakeasyBase));
export { UpdateDeviceWirelessBluetoothSettingsPathParams };
var UpdateDeviceWirelessBluetoothSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessBluetoothSettingsRequestBody, _super);
    function UpdateDeviceWirelessBluetoothSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=major" }),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessBluetoothSettingsRequestBody.prototype, "major", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minor" }),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessBluetoothSettingsRequestBody.prototype, "minor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], UpdateDeviceWirelessBluetoothSettingsRequestBody.prototype, "uuid", void 0);
    return UpdateDeviceWirelessBluetoothSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateDeviceWirelessBluetoothSettingsRequestBody };
var UpdateDeviceWirelessBluetoothSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessBluetoothSettingsRequest, _super);
    function UpdateDeviceWirelessBluetoothSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDeviceWirelessBluetoothSettingsPathParams)
    ], UpdateDeviceWirelessBluetoothSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDeviceWirelessBluetoothSettingsRequestBody)
    ], UpdateDeviceWirelessBluetoothSettingsRequest.prototype, "request", void 0);
    return UpdateDeviceWirelessBluetoothSettingsRequest;
}(SpeakeasyBase));
export { UpdateDeviceWirelessBluetoothSettingsRequest };
var UpdateDeviceWirelessBluetoothSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateDeviceWirelessBluetoothSettingsResponse, _super);
    function UpdateDeviceWirelessBluetoothSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDeviceWirelessBluetoothSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDeviceWirelessBluetoothSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateDeviceWirelessBluetoothSettingsResponse.prototype, "updateDeviceWirelessBluetoothSettings200ApplicationJsonObject", void 0);
    return UpdateDeviceWirelessBluetoothSettingsResponse;
}(SpeakeasyBase));
export { UpdateDeviceWirelessBluetoothSettingsResponse };
