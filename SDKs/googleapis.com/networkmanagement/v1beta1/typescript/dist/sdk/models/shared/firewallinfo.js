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
export var FirewallInfoFirewallRuleTypeEnum;
(function (FirewallInfoFirewallRuleTypeEnum) {
    FirewallInfoFirewallRuleTypeEnum["FirewallRuleTypeUnspecified"] = "FIREWALL_RULE_TYPE_UNSPECIFIED";
    FirewallInfoFirewallRuleTypeEnum["HierarchicalFirewallPolicyRule"] = "HIERARCHICAL_FIREWALL_POLICY_RULE";
    FirewallInfoFirewallRuleTypeEnum["VpcFirewallRule"] = "VPC_FIREWALL_RULE";
    FirewallInfoFirewallRuleTypeEnum["ImpliedVpcFirewallRule"] = "IMPLIED_VPC_FIREWALL_RULE";
    FirewallInfoFirewallRuleTypeEnum["ServerlessVpcAccessManagedFirewallRule"] = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE";
    FirewallInfoFirewallRuleTypeEnum["NetworkFirewallPolicyRule"] = "NETWORK_FIREWALL_POLICY_RULE";
})(FirewallInfoFirewallRuleTypeEnum || (FirewallInfoFirewallRuleTypeEnum = {}));
// FirewallInfo
/**
 * For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.
**/
var FirewallInfo = /** @class */ (function (_super) {
    __extends(FirewallInfo, _super);
    function FirewallInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], FirewallInfo.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], FirewallInfo.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], FirewallInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firewallRuleType" }),
        __metadata("design:type", String)
    ], FirewallInfo.prototype, "firewallRuleType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkUri" }),
        __metadata("design:type", String)
    ], FirewallInfo.prototype, "networkUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=policy" }),
        __metadata("design:type", String)
    ], FirewallInfo.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=priority" }),
        __metadata("design:type", Number)
    ], FirewallInfo.prototype, "priority", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetServiceAccounts" }),
        __metadata("design:type", Array)
    ], FirewallInfo.prototype, "targetServiceAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetTags" }),
        __metadata("design:type", Array)
    ], FirewallInfo.prototype, "targetTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], FirewallInfo.prototype, "uri", void 0);
    return FirewallInfo;
}(SpeakeasyBase));
export { FirewallInfo };
