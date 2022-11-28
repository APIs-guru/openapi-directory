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
var UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams, _super);
    function UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams.prototype, "organizationId", void 0);
    return UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams };
export var UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;
(function (UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum) {
    UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum["Allow"] = "allow";
    UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum || (UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum = {}));
export var UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;
(function (UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum) {
    UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum["Udp"] = "udp";
    UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum["Icmp"] = "icmp";
    UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum["Any"] = "any";
})(UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum || (UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum = {}));
var UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules, _super);
    function UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destCidr" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules.prototype, "destCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destPort" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules.prototype, "destPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcCidr" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules.prototype, "srcCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcPort" }),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules.prototype, "srcPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syslogEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules.prototype, "syslogEnabled", void 0);
    return UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules };
var UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody, _super);
    function UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syslogDefaultRule" }),
        __metadata("design:type", Boolean)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody.prototype, "syslogDefaultRule", void 0);
    return UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody };
var UpdateOrganizationApplianceVpnVpnFirewallRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnVpnFirewallRulesRequest, _super);
    function UpdateOrganizationApplianceVpnVpnFirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesRequest.prototype, "request", void 0);
    return UpdateOrganizationApplianceVpnVpnFirewallRulesRequest;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnVpnFirewallRulesRequest };
var UpdateOrganizationApplianceVpnVpnFirewallRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateOrganizationApplianceVpnVpnFirewallRulesResponse, _super);
    function UpdateOrganizationApplianceVpnVpnFirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateOrganizationApplianceVpnVpnFirewallRulesResponse.prototype, "updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJsonObject", void 0);
    return UpdateOrganizationApplianceVpnVpnFirewallRulesResponse;
}(SpeakeasyBase));
export { UpdateOrganizationApplianceVpnVpnFirewallRulesResponse };
