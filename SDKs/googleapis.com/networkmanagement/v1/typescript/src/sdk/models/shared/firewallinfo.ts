import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FirewallInfoFirewallRuleTypeEnum {
    FirewallRuleTypeUnspecified = "FIREWALL_RULE_TYPE_UNSPECIFIED"
,    HierarchicalFirewallPolicyRule = "HIERARCHICAL_FIREWALL_POLICY_RULE"
,    VpcFirewallRule = "VPC_FIREWALL_RULE"
,    ImpliedVpcFirewallRule = "IMPLIED_VPC_FIREWALL_RULE"
,    ServerlessVpcAccessManagedFirewallRule = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE"
,    NetworkFirewallPolicyRule = "NETWORK_FIREWALL_POLICY_RULE"
}


// FirewallInfo
/** 
 * For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.
**/
export class FirewallInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=firewallRuleType" })
  firewallRuleType?: FirewallInfoFirewallRuleTypeEnum;

  @Metadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: number;

  @Metadata({ data: "json, name=targetServiceAccounts" })
  targetServiceAccounts?: string[];

  @Metadata({ data: "json, name=targetTags" })
  targetTags?: string[];

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
