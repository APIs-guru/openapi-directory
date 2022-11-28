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
import { FirewallRuleConfig } from "./firewallruleconfig";
export var FirewallRulesInboundPolicyEnum;
(function (FirewallRulesInboundPolicyEnum) {
    FirewallRulesInboundPolicyEnum["Accept"] = "ACCEPT";
    FirewallRulesInboundPolicyEnum["Drop"] = "DROP";
})(FirewallRulesInboundPolicyEnum || (FirewallRulesInboundPolicyEnum = {}));
export var FirewallRulesOutboundPolicyEnum;
(function (FirewallRulesOutboundPolicyEnum) {
    FirewallRulesOutboundPolicyEnum["Accept"] = "ACCEPT";
    FirewallRulesOutboundPolicyEnum["Drop"] = "DROP";
})(FirewallRulesOutboundPolicyEnum || (FirewallRulesOutboundPolicyEnum = {}));
// FirewallRules
/**
 * The inbound and outbound access rules to apply to the Firewall.
 *
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 *
**/
var FirewallRules = /** @class */ (function (_super) {
    __extends(FirewallRules, _super);
    function FirewallRules() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound", elemType: FirewallRuleConfig }),
        __metadata("design:type", Array)
    ], FirewallRules.prototype, "inbound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inbound_policy" }),
        __metadata("design:type", String)
    ], FirewallRules.prototype, "inboundPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound", elemType: FirewallRuleConfig }),
        __metadata("design:type", Array)
    ], FirewallRules.prototype, "outbound", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=outbound_policy" }),
        __metadata("design:type", String)
    ], FirewallRules.prototype, "outboundPolicy", void 0);
    return FirewallRules;
}(SpeakeasyBase));
export { FirewallRules };
export var FirewallStatusEnum;
(function (FirewallStatusEnum) {
    FirewallStatusEnum["Enabled"] = "enabled";
    FirewallStatusEnum["Disabled"] = "disabled";
    FirewallStatusEnum["Deleted"] = "deleted";
})(FirewallStatusEnum || (FirewallStatusEnum = {}));
// Firewall
/**
 * A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
 *
**/
var Firewall = /** @class */ (function (_super) {
    __extends(Firewall, _super);
    function Firewall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", Date)
    ], Firewall.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], Firewall.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], Firewall.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules" }),
        __metadata("design:type", FirewallRules)
    ], Firewall.prototype, "rules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Firewall.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], Firewall.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Firewall.prototype, "updated", void 0);
    return Firewall;
}(SpeakeasyBase));
export { Firewall };
