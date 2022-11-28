import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FirewallInfoFirewallRuleTypeEnum {
    FirewallRuleTypeUnspecified = "FIREWALL_RULE_TYPE_UNSPECIFIED",
    HierarchicalFirewallPolicyRule = "HIERARCHICAL_FIREWALL_POLICY_RULE",
    VpcFirewallRule = "VPC_FIREWALL_RULE",
    ImpliedVpcFirewallRule = "IMPLIED_VPC_FIREWALL_RULE",
    ServerlessVpcAccessManagedFirewallRule = "SERVERLESS_VPC_ACCESS_MANAGED_FIREWALL_RULE",
    NetworkFirewallPolicyRule = "NETWORK_FIREWALL_POLICY_RULE"
}


// FirewallInfo
/** 
 * For display only. Metadata associated with a VPC firewall rule, an implied VPC firewall rule, or a hierarchical firewall policy rule.
**/
export class FirewallInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=firewallRuleType" })
  firewallRuleType?: FirewallInfoFirewallRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=networkUri" })
  networkUri?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: number;

  @SpeakeasyMetadata({ data: "json, name=targetServiceAccounts" })
  targetServiceAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=targetTags" })
  targetTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
