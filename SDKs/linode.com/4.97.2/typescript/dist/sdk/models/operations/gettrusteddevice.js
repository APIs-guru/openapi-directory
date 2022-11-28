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
import * as shared from "../shared";
var GetTrustedDevicePathParams = /** @class */ (function (_super) {
    __extends(GetTrustedDevicePathParams, _super);
    function GetTrustedDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", Number)
    ], GetTrustedDevicePathParams.prototype, "deviceId", void 0);
    return GetTrustedDevicePathParams;
}(SpeakeasyBase));
export { GetTrustedDevicePathParams };
var GetTrustedDeviceSecurity = /** @class */ (function (_super) {
    __extends(GetTrustedDeviceSecurity, _super);
    function GetTrustedDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetTrustedDeviceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetTrustedDeviceSecurity.prototype, "oauth", void 0);
    return GetTrustedDeviceSecurity;
}(SpeakeasyBase));
export { GetTrustedDeviceSecurity };
var GetTrustedDeviceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetTrustedDeviceDefaultApplicationJson, _super);
    function GetTrustedDeviceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetTrustedDeviceDefaultApplicationJson.prototype, "errors", void 0);
    return GetTrustedDeviceDefaultApplicationJson;
}(SpeakeasyBase));
export { GetTrustedDeviceDefaultApplicationJson };
var GetTrustedDeviceRequest = /** @class */ (function (_super) {
    __extends(GetTrustedDeviceRequest, _super);
    function GetTrustedDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrustedDevicePathParams)
    ], GetTrustedDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrustedDeviceSecurity)
    ], GetTrustedDeviceRequest.prototype, "security", void 0);
    return GetTrustedDeviceRequest;
}(SpeakeasyBase));
export { GetTrustedDeviceRequest };
var GetTrustedDeviceResponse = /** @class */ (function (_super) {
    __extends(GetTrustedDeviceResponse, _super);
    function GetTrustedDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTrustedDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTrustedDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TrustedDevice)
    ], GetTrustedDeviceResponse.prototype, "trustedDevice", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTrustedDeviceDefaultApplicationJson)
    ], GetTrustedDeviceResponse.prototype, "getTrustedDeviceDefaultApplicationJsonObject", void 0);
    return GetTrustedDeviceResponse;
}(SpeakeasyBase));
export { GetTrustedDeviceResponse };
