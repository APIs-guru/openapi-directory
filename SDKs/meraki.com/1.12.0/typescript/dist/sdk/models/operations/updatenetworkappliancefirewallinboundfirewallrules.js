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
var UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams, _super);
    function UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams };
export var UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;
(function (UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum) {
    UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum["Allow"] = "allow";
    UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum["Deny"] = "deny";
})(UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum || (UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum = {}));
export var UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;
(function (UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum) {
    UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum["Tcp"] = "tcp";
    UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum["Udp"] = "udp";
    UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum["Icmp"] = "icmp";
    UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum["Any"] = "any";
})(UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum || (UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum = {}));
var UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules, _super);
    function UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules.prototype, "destCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=destPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules.prototype, "destPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcCidr" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules.prototype, "srcCidr", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=srcPort" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules.prototype, "srcPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syslogEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules.prototype, "syslogEnabled", void 0);
    return UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules };
var UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody, _super);
    function UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=syslogDefaultRule" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody.prototype, "syslogDefaultRule", void 0);
    return UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody };
var UpdateNetworkApplianceFirewallInboundFirewallRulesRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallInboundFirewallRulesRequest, _super);
    function UpdateNetworkApplianceFirewallInboundFirewallRulesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceFirewallInboundFirewallRulesRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallInboundFirewallRulesRequest };
var UpdateNetworkApplianceFirewallInboundFirewallRulesResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceFirewallInboundFirewallRulesResponse, _super);
    function UpdateNetworkApplianceFirewallInboundFirewallRulesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceFirewallInboundFirewallRulesResponse.prototype, "updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceFirewallInboundFirewallRulesResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceFirewallInboundFirewallRulesResponse };
