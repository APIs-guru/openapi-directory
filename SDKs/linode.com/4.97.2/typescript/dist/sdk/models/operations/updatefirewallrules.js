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
export var UpdateFirewallRulesServerList = [
    "https://api.linode.com/v4",
];
var UpdateFirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateFirewallRulesPathParams, _super);
    function UpdateFirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" }),
        __metadata("design:type", Number)
    ], UpdateFirewallRulesPathParams.prototype, "firewallId", void 0);
    return UpdateFirewallRulesPathParams;
}(SpeakeasyBase));
export { UpdateFirewallRulesPathParams };
var UpdateFirewallRulesSecurity = /** @class */ (function (_super) {
    __extends(UpdateFirewallRulesSecurity, _super);
    function UpdateFirewallRulesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateFirewallRulesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateFirewallRulesSecurity.prototype, "oauth", void 0);
    return UpdateFirewallRulesSecurity;
}(SpeakeasyBase));
export { UpdateFirewallRulesSecurity };
var UpdateFirewallRulesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateFirewallRulesDefaultApplicationJson, _super);
    function UpdateFirewallRulesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateFirewallRulesDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateFirewallRulesDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateFirewallRulesDefaultApplicationJson };
var UpdateFirewallRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateFirewallRulesRequest, _super);
    function UpdateFirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFirewallRulesRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFirewallRulesPathParams)
    ], UpdateFirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Rules)
    ], UpdateFirewallRulesRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFirewallRulesSecurity)
    ], UpdateFirewallRulesRequest.prototype, "security", void 0);
    return UpdateFirewallRulesRequest;
}(SpeakeasyBase));
export { UpdateFirewallRulesRequest };
var UpdateFirewallRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateFirewallRulesResponse, _super);
    function UpdateFirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateFirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateFirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Rules)
    ], UpdateFirewallRulesResponse.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateFirewallRulesDefaultApplicationJson)
    ], UpdateFirewallRulesResponse.prototype, "updateFirewallRulesDefaultApplicationJsonObject", void 0);
    return UpdateFirewallRulesResponse;
}(SpeakeasyBase));
export { UpdateFirewallRulesResponse };
