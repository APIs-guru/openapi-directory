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
export var GetFirewallDeviceServerList = [
    "https://api.linode.com/v4",
];
var GetFirewallDevicePathParams = /** @class */ (function (_super) {
    __extends(GetFirewallDevicePathParams, _super);
    function GetFirewallDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", Number)
    ], GetFirewallDevicePathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" }),
        __metadata("design:type", Number)
    ], GetFirewallDevicePathParams.prototype, "firewallId", void 0);
    return GetFirewallDevicePathParams;
}(SpeakeasyBase));
export { GetFirewallDevicePathParams };
var GetFirewallDeviceSecurity = /** @class */ (function (_super) {
    __extends(GetFirewallDeviceSecurity, _super);
    function GetFirewallDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetFirewallDeviceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetFirewallDeviceSecurity.prototype, "oauth", void 0);
    return GetFirewallDeviceSecurity;
}(SpeakeasyBase));
export { GetFirewallDeviceSecurity };
var GetFirewallDeviceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetFirewallDeviceDefaultApplicationJson, _super);
    function GetFirewallDeviceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetFirewallDeviceDefaultApplicationJson.prototype, "errors", void 0);
    return GetFirewallDeviceDefaultApplicationJson;
}(SpeakeasyBase));
export { GetFirewallDeviceDefaultApplicationJson };
var GetFirewallDeviceRequest = /** @class */ (function (_super) {
    __extends(GetFirewallDeviceRequest, _super);
    function GetFirewallDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallDeviceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallDevicePathParams)
    ], GetFirewallDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallDeviceSecurity)
    ], GetFirewallDeviceRequest.prototype, "security", void 0);
    return GetFirewallDeviceRequest;
}(SpeakeasyBase));
export { GetFirewallDeviceRequest };
var GetFirewallDeviceResponse = /** @class */ (function (_super) {
    __extends(GetFirewallDeviceResponse, _super);
    function GetFirewallDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.FirewallDevices)
    ], GetFirewallDeviceResponse.prototype, "firewallDevices", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFirewallDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallDeviceDefaultApplicationJson)
    ], GetFirewallDeviceResponse.prototype, "getFirewallDeviceDefaultApplicationJsonObject", void 0);
    return GetFirewallDeviceResponse;
}(SpeakeasyBase));
export { GetFirewallDeviceResponse };
