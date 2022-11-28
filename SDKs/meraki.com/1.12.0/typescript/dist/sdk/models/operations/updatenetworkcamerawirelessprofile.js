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
var UpdateNetworkCameraWirelessProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraWirelessProfilePathParams, _super);
    function UpdateNetworkCameraWirelessProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfilePathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wirelessProfileId" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfilePathParams.prototype, "wirelessProfileId", void 0);
    return UpdateNetworkCameraWirelessProfilePathParams;
}(SpeakeasyBase));
export { UpdateNetworkCameraWirelessProfilePathParams };
// UpdateNetworkCameraWirelessProfileRequestBodyIdentity
/**
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
var UpdateNetworkCameraWirelessProfileRequestBodyIdentity = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraWirelessProfileRequestBodyIdentity, _super);
    function UpdateNetworkCameraWirelessProfileRequestBodyIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfileRequestBodyIdentity.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfileRequestBodyIdentity.prototype, "username", void 0);
    return UpdateNetworkCameraWirelessProfileRequestBodyIdentity;
}(SpeakeasyBase));
export { UpdateNetworkCameraWirelessProfileRequestBodyIdentity };
export var UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
(function (UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum) {
    UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum["Psk"] = "psk";
    UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum["EightThousandAndTwentyOnexRadius"] = "8021x-radius";
})(UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum || (UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = {}));
// UpdateNetworkCameraWirelessProfileRequestBodySsid
/**
 * The details of the SSID config.
**/
var UpdateNetworkCameraWirelessProfileRequestBodySsid = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraWirelessProfileRequestBodySsid, _super);
    function UpdateNetworkCameraWirelessProfileRequestBodySsid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfileRequestBodySsid.prototype, "authMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionMode" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfileRequestBodySsid.prototype, "encryptionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfileRequestBodySsid.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=psk" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfileRequestBodySsid.prototype, "psk", void 0);
    return UpdateNetworkCameraWirelessProfileRequestBodySsid;
}(SpeakeasyBase));
export { UpdateNetworkCameraWirelessProfileRequestBodySsid };
var UpdateNetworkCameraWirelessProfileRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraWirelessProfileRequestBody, _super);
    function UpdateNetworkCameraWirelessProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity" }),
        __metadata("design:type", UpdateNetworkCameraWirelessProfileRequestBodyIdentity)
    ], UpdateNetworkCameraWirelessProfileRequestBody.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfileRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssid" }),
        __metadata("design:type", UpdateNetworkCameraWirelessProfileRequestBodySsid)
    ], UpdateNetworkCameraWirelessProfileRequestBody.prototype, "ssid", void 0);
    return UpdateNetworkCameraWirelessProfileRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkCameraWirelessProfileRequestBody };
var UpdateNetworkCameraWirelessProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraWirelessProfileRequest, _super);
    function UpdateNetworkCameraWirelessProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkCameraWirelessProfilePathParams)
    ], UpdateNetworkCameraWirelessProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkCameraWirelessProfileRequestBody)
    ], UpdateNetworkCameraWirelessProfileRequest.prototype, "request", void 0);
    return UpdateNetworkCameraWirelessProfileRequest;
}(SpeakeasyBase));
export { UpdateNetworkCameraWirelessProfileRequest };
var UpdateNetworkCameraWirelessProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkCameraWirelessProfileResponse, _super);
    function UpdateNetworkCameraWirelessProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkCameraWirelessProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkCameraWirelessProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkCameraWirelessProfileResponse.prototype, "updateNetworkCameraWirelessProfile200ApplicationJsonObject", void 0);
    return UpdateNetworkCameraWirelessProfileResponse;
}(SpeakeasyBase));
export { UpdateNetworkCameraWirelessProfileResponse };
