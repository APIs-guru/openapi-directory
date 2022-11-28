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
export var CreateFirewallsServerList = [
    "https://api.linode.com/v4",
];
// CreateFirewallsRequestBodyDevices
/**
 * Devices to create for this Firewall.
 * When a Device is created, the Firewall is assigned to its associated service.
 * Currently, Devices can only be created for Linode instances.
 *
**/
var CreateFirewallsRequestBodyDevices = /** @class */ (function (_super) {
    __extends(CreateFirewallsRequestBodyDevices, _super);
    function CreateFirewallsRequestBodyDevices() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=linodes" }),
        __metadata("design:type", Array)
    ], CreateFirewallsRequestBodyDevices.prototype, "linodes", void 0);
    return CreateFirewallsRequestBodyDevices;
}(SpeakeasyBase));
export { CreateFirewallsRequestBodyDevices };
export var CreateFirewallsRequestBodyRulesInboundPolicyEnum;
(function (CreateFirewallsRequestBodyRulesInboundPolicyEnum) {
    CreateFirewallsRequestBodyRulesInboundPolicyEnum["Accept"] = "ACCEPT";
    CreateFirewallsRequestBodyRulesInboundPolicyEnum["Drop"] = "DROP";
})(CreateFirewallsRequestBodyRulesInboundPolicyEnum || (CreateFirewallsRequestBodyRulesInboundPolicyEnum = {}));
export var CreateFirewallsRequestBodyRulesOutboundPolicyEnum;
(function (CreateFirewallsRequestBodyRulesOutboundPolicyEnum) {
    CreateFirewallsRequestBodyRulesOutboundPolicyEnum["Accept"] = "ACCEPT";
    CreateFirewallsRequestBodyRulesOutboundPolicyEnum["Drop"] = "DROP";
})(CreateFirewallsRequestBodyRulesOutboundPolicyEnum || (CreateFirewallsRequestBodyRulesOutboundPolicyEnum = {}));
// CreateFirewallsRequestBodyRules
/**
 * The inbound and outbound access rules to apply to the Firewall.
 *
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 *
**/
var CreateFirewallsRequestBodyRules = /** @class */ (function (_super) {
    __extends(CreateFirewallsRequestBodyRules, _super);
    function CreateFirewallsRequestBodyRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound", elemType: shared.FirewallRuleConfig }),
        __metadata("design:type", Array)
    ], CreateFirewallsRequestBodyRules.prototype, "inbound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_policy" }),
        __metadata("design:type", String)
    ], CreateFirewallsRequestBodyRules.prototype, "inboundPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound", elemType: shared.FirewallRuleConfig }),
        __metadata("design:type", Array)
    ], CreateFirewallsRequestBodyRules.prototype, "outbound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_policy" }),
        __metadata("design:type", String)
    ], CreateFirewallsRequestBodyRules.prototype, "outboundPolicy", void 0);
    return CreateFirewallsRequestBodyRules;
}(SpeakeasyBase));
export { CreateFirewallsRequestBodyRules };
var CreateFirewallsRequestBodyInput = /** @class */ (function (_super) {
    __extends(CreateFirewallsRequestBodyInput, _super);
    function CreateFirewallsRequestBodyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devices" }),
        __metadata("design:type", CreateFirewallsRequestBodyDevices)
    ], CreateFirewallsRequestBodyInput.prototype, "devices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], CreateFirewallsRequestBodyInput.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules" }),
        __metadata("design:type", CreateFirewallsRequestBodyRules)
    ], CreateFirewallsRequestBodyInput.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CreateFirewallsRequestBodyInput.prototype, "tags", void 0);
    return CreateFirewallsRequestBodyInput;
}(SpeakeasyBase));
export { CreateFirewallsRequestBodyInput };
var CreateFirewallsSecurity = /** @class */ (function (_super) {
    __extends(CreateFirewallsSecurity, _super);
    function CreateFirewallsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateFirewallsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateFirewallsSecurity.prototype, "oauth", void 0);
    return CreateFirewallsSecurity;
}(SpeakeasyBase));
export { CreateFirewallsSecurity };
var CreateFirewallsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateFirewallsDefaultApplicationJson, _super);
    function CreateFirewallsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateFirewallsDefaultApplicationJson.prototype, "errors", void 0);
    return CreateFirewallsDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateFirewallsDefaultApplicationJson };
var CreateFirewallsRequest = /** @class */ (function (_super) {
    __extends(CreateFirewallsRequest, _super);
    function CreateFirewallsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFirewallsRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateFirewallsRequestBodyInput)
    ], CreateFirewallsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFirewallsSecurity)
    ], CreateFirewallsRequest.prototype, "security", void 0);
    return CreateFirewallsRequest;
}(SpeakeasyBase));
export { CreateFirewallsRequest };
var CreateFirewallsResponse = /** @class */ (function (_super) {
    __extends(CreateFirewallsResponse, _super);
    function CreateFirewallsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateFirewallsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Firewall)
    ], CreateFirewallsResponse.prototype, "firewall", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateFirewallsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateFirewallsDefaultApplicationJson)
    ], CreateFirewallsResponse.prototype, "createFirewallsDefaultApplicationJsonObject", void 0);
    return CreateFirewallsResponse;
}(SpeakeasyBase));
export { CreateFirewallsResponse };
