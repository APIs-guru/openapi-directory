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
export var GetFirewallServerList = [
    "https://api.linode.com/v4",
];
var GetFirewallPathParams = /** @class */ (function (_super) {
    __extends(GetFirewallPathParams, _super);
    function GetFirewallPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" }),
        __metadata("design:type", Number)
    ], GetFirewallPathParams.prototype, "firewallId", void 0);
    return GetFirewallPathParams;
}(SpeakeasyBase));
export { GetFirewallPathParams };
var GetFirewallSecurity = /** @class */ (function (_super) {
    __extends(GetFirewallSecurity, _super);
    function GetFirewallSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetFirewallSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetFirewallSecurity.prototype, "oauth", void 0);
    return GetFirewallSecurity;
}(SpeakeasyBase));
export { GetFirewallSecurity };
var GetFirewallDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetFirewallDefaultApplicationJson, _super);
    function GetFirewallDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetFirewallDefaultApplicationJson.prototype, "errors", void 0);
    return GetFirewallDefaultApplicationJson;
}(SpeakeasyBase));
export { GetFirewallDefaultApplicationJson };
var GetFirewallRequest = /** @class */ (function (_super) {
    __extends(GetFirewallRequest, _super);
    function GetFirewallRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallPathParams)
    ], GetFirewallRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallSecurity)
    ], GetFirewallRequest.prototype, "security", void 0);
    return GetFirewallRequest;
}(SpeakeasyBase));
export { GetFirewallRequest };
var GetFirewallResponse = /** @class */ (function (_super) {
    __extends(GetFirewallResponse, _super);
    function GetFirewallResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Firewall)
    ], GetFirewallResponse.prototype, "firewall", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFirewallResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallDefaultApplicationJson)
    ], GetFirewallResponse.prototype, "getFirewallDefaultApplicationJsonObject", void 0);
    return GetFirewallResponse;
}(SpeakeasyBase));
export { GetFirewallResponse };
