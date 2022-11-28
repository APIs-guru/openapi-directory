import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FirewallInfoFirewallRuleTypeEnum {
    FirewallRuleTypeUnspecified = "FIREWALL_RULE_TYPE_UNSPECIFIED",
    HierarchicalFirewallPolicyRule = "HIERARCHICAL_FIREWALL_POLICY_RULE",
    VpcFirewallRule = "VPC_FIREWALL_RULE",
    ImpliedVpcFirewallRule = "IMPLIED_VPC_FIREWALL_RULE",
    ServerlessVpcAccessManagedFirewallRule = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
    NetworkFirewallPolicyRule = "NETWORK_FIREWALL_POLICY_RULE"
}
/**
 * For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.
**/
export declare class FirewallInfo extends SpeakeasyBase {
    action?: string;
    direction?: string;
    displayName?: string;
    firewallRuleType?: FirewallInfoFirewallRuleTypeEnum;
    networkUri?: string;
    policy?: string;
    priority?: number;
    targetServiceAccounts?: string[];
    targetTags?: string[];
    uri?: string;
}
