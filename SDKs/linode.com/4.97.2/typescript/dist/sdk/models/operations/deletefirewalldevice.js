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
export var DeleteFirewallDeviceServerList = [
    "https://api.linode.com/v4",
];
var DeleteFirewallDevicePathParams = /** @class */ (function (_super) {
    __extends(DeleteFirewallDevicePathParams, _super);
    function DeleteFirewallDevicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" }),
        __metadata("design:type", Number)
    ], DeleteFirewallDevicePathParams.prototype, "deviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" }),
        __metadata("design:type", Number)
    ], DeleteFirewallDevicePathParams.prototype, "firewallId", void 0);
    return DeleteFirewallDevicePathParams;
}(SpeakeasyBase));
export { DeleteFirewallDevicePathParams };
var DeleteFirewallDeviceSecurity = /** @class */ (function (_super) {
    __extends(DeleteFirewallDeviceSecurity, _super);
    function DeleteFirewallDeviceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], DeleteFirewallDeviceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], DeleteFirewallDeviceSecurity.prototype, "oauth", void 0);
    return DeleteFirewallDeviceSecurity;
}(SpeakeasyBase));
export { DeleteFirewallDeviceSecurity };
var DeleteFirewallDeviceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteFirewallDeviceDefaultApplicationJson, _super);
    function DeleteFirewallDeviceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], DeleteFirewallDeviceDefaultApplicationJson.prototype, "errors", void 0);
    return DeleteFirewallDeviceDefaultApplicationJson;
}(SpeakeasyBase));
export { DeleteFirewallDeviceDefaultApplicationJson };
var DeleteFirewallDeviceRequest = /** @class */ (function (_super) {
    __extends(DeleteFirewallDeviceRequest, _super);
    function DeleteFirewallDeviceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFirewallDeviceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFirewallDevicePathParams)
    ], DeleteFirewallDeviceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFirewallDeviceSecurity)
    ], DeleteFirewallDeviceRequest.prototype, "security", void 0);
    return DeleteFirewallDeviceRequest;
}(SpeakeasyBase));
export { DeleteFirewallDeviceRequest };
var DeleteFirewallDeviceResponse = /** @class */ (function (_super) {
    __extends(DeleteFirewallDeviceResponse, _super);
    function DeleteFirewallDeviceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteFirewallDeviceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteFirewallDeviceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DeleteFirewallDeviceResponse.prototype, "deleteFirewallDevice200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteFirewallDeviceDefaultApplicationJson)
    ], DeleteFirewallDeviceResponse.prototype, "deleteFirewallDeviceDefaultApplicationJsonObject", void 0);
    return DeleteFirewallDeviceResponse;
}(SpeakeasyBase));
export { DeleteFirewallDeviceResponse };
