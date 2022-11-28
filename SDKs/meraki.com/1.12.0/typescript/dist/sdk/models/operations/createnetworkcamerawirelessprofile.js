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
var CreateNetworkCameraWirelessProfilePathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraWirelessProfilePathParams, _super);
    function CreateNetworkCameraWirelessProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfilePathParams.prototype, "networkId", void 0);
    return CreateNetworkCameraWirelessProfilePathParams;
}(SpeakeasyBase));
export { CreateNetworkCameraWirelessProfilePathParams };
// CreateNetworkCameraWirelessProfileRequestBodyIdentity
/**
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
var CreateNetworkCameraWirelessProfileRequestBodyIdentity = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraWirelessProfileRequestBodyIdentity, _super);
    function CreateNetworkCameraWirelessProfileRequestBodyIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfileRequestBodyIdentity.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfileRequestBodyIdentity.prototype, "username", void 0);
    return CreateNetworkCameraWirelessProfileRequestBodyIdentity;
}(SpeakeasyBase));
export { CreateNetworkCameraWirelessProfileRequestBodyIdentity };
export var CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
(function (CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum) {
    CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum["Psk"] = "psk";
    CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum["EightThousandAndTwentyOnexRadius"] = "8021x-radius";
})(CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum || (CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum = {}));
// CreateNetworkCameraWirelessProfileRequestBodySsid
/**
 * The details of the SSID config.
**/
var CreateNetworkCameraWirelessProfileRequestBodySsid = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraWirelessProfileRequestBodySsid, _super);
    function CreateNetworkCameraWirelessProfileRequestBodySsid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authMode" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfileRequestBodySsid.prototype, "authMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=encryptionMode" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfileRequestBodySsid.prototype, "encryptionMode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfileRequestBodySsid.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=psk" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfileRequestBodySsid.prototype, "psk", void 0);
    return CreateNetworkCameraWirelessProfileRequestBodySsid;
}(SpeakeasyBase));
export { CreateNetworkCameraWirelessProfileRequestBodySsid };
var CreateNetworkCameraWirelessProfileRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraWirelessProfileRequestBody, _super);
    function CreateNetworkCameraWirelessProfileRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identity" }),
        __metadata("design:type", CreateNetworkCameraWirelessProfileRequestBodyIdentity)
    ], CreateNetworkCameraWirelessProfileRequestBody.prototype, "identity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfileRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssid" }),
        __metadata("design:type", CreateNetworkCameraWirelessProfileRequestBodySsid)
    ], CreateNetworkCameraWirelessProfileRequestBody.prototype, "ssid", void 0);
    return CreateNetworkCameraWirelessProfileRequestBody;
}(SpeakeasyBase));
export { CreateNetworkCameraWirelessProfileRequestBody };
var CreateNetworkCameraWirelessProfileRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraWirelessProfileRequest, _super);
    function CreateNetworkCameraWirelessProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkCameraWirelessProfilePathParams)
    ], CreateNetworkCameraWirelessProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkCameraWirelessProfileRequestBody)
    ], CreateNetworkCameraWirelessProfileRequest.prototype, "request", void 0);
    return CreateNetworkCameraWirelessProfileRequest;
}(SpeakeasyBase));
export { CreateNetworkCameraWirelessProfileRequest };
var CreateNetworkCameraWirelessProfileResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkCameraWirelessProfileResponse, _super);
    function CreateNetworkCameraWirelessProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkCameraWirelessProfileResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkCameraWirelessProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkCameraWirelessProfileResponse.prototype, "createNetworkCameraWirelessProfile200ApplicationJsonObject", void 0);
    return CreateNetworkCameraWirelessProfileResponse;
}(SpeakeasyBase));
export { CreateNetworkCameraWirelessProfileResponse };
