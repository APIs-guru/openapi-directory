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
var UpdateNetworkWirelessBluetoothSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBluetoothSettingsPathParams, _super);
    function UpdateNetworkWirelessBluetoothSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBluetoothSettingsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkWirelessBluetoothSettingsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessBluetoothSettingsPathParams };
export var UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum;
(function (UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum) {
    UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum["Unique"] = "Unique";
    UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum["NonUnique"] = "Non-unique";
})(UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum || (UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum = {}));
var UpdateNetworkWirelessBluetoothSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBluetoothSettingsRequestBody, _super);
    function UpdateNetworkWirelessBluetoothSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertisingEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessBluetoothSettingsRequestBody.prototype, "advertisingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=major" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessBluetoothSettingsRequestBody.prototype, "major", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=majorMinorAssignmentMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBluetoothSettingsRequestBody.prototype, "majorMinorAssignmentMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minor" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessBluetoothSettingsRequestBody.prototype, "minor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scanningEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessBluetoothSettingsRequestBody.prototype, "scanningEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uuid" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBluetoothSettingsRequestBody.prototype, "uuid", void 0);
    return UpdateNetworkWirelessBluetoothSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessBluetoothSettingsRequestBody };
var UpdateNetworkWirelessBluetoothSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBluetoothSettingsRequest, _super);
    function UpdateNetworkWirelessBluetoothSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessBluetoothSettingsPathParams)
    ], UpdateNetworkWirelessBluetoothSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessBluetoothSettingsRequestBody)
    ], UpdateNetworkWirelessBluetoothSettingsRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessBluetoothSettingsRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessBluetoothSettingsRequest };
var UpdateNetworkWirelessBluetoothSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessBluetoothSettingsResponse, _super);
    function UpdateNetworkWirelessBluetoothSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessBluetoothSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessBluetoothSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessBluetoothSettingsResponse.prototype, "updateNetworkWirelessBluetoothSettings200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessBluetoothSettingsResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessBluetoothSettingsResponse };
