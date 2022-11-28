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
export var GetFirewallRulesServerList = [
    "https://api.linode.com/v4",
];
var GetFirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(GetFirewallRulesPathParams, _super);
    function GetFirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" }),
        __metadata("design:type", Number)
    ], GetFirewallRulesPathParams.prototype, "firewallId", void 0);
    return GetFirewallRulesPathParams;
}(SpeakeasyBase));
export { GetFirewallRulesPathParams };
var GetFirewallRulesSecurity = /** @class */ (function (_super) {
    __extends(GetFirewallRulesSecurity, _super);
    function GetFirewallRulesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetFirewallRulesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetFirewallRulesSecurity.prototype, "oauth", void 0);
    return GetFirewallRulesSecurity;
}(SpeakeasyBase));
export { GetFirewallRulesSecurity };
var GetFirewallRulesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetFirewallRulesDefaultApplicationJson, _super);
    function GetFirewallRulesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetFirewallRulesDefaultApplicationJson.prototype, "errors", void 0);
    return GetFirewallRulesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetFirewallRulesDefaultApplicationJson };
var GetFirewallRulesRequest = /** @class */ (function (_super) {
    __extends(GetFirewallRulesRequest, _super);
    function GetFirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallRulesRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallRulesPathParams)
    ], GetFirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallRulesSecurity)
    ], GetFirewallRulesRequest.prototype, "security", void 0);
    return GetFirewallRulesRequest;
}(SpeakeasyBase));
export { GetFirewallRulesRequest };
var GetFirewallRulesResponse = /** @class */ (function (_super) {
    __extends(GetFirewallRulesResponse, _super);
    function GetFirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFirewallRulesDefaultApplicationJson)
    ], GetFirewallRulesResponse.prototype, "getFirewallRulesDefaultApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Rules)
    ], GetFirewallRulesResponse.prototype, "rules", void 0);
    return GetFirewallRulesResponse;
}(SpeakeasyBase));
export { GetFirewallRulesResponse };
