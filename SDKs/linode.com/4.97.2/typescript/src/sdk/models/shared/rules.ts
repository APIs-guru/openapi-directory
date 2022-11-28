import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleConfig } from "./firewallruleconfig";


export enum RulesInboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}

export enum RulesOutboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}


// Rules
/** 
 * The inbound and outbound access rules to apply to the Firewall.
 * 
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 * 
**/
export class Rules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inbound", elemType: FirewallRuleConfig })
  inbound?: FirewallRuleConfig[];

  @SpeakeasyMetadata({ data: "json, name=inbound_policy" })
  inboundPolicy?: RulesInboundPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=outbound", elemType: FirewallRuleConfig })
  outbound?: FirewallRuleConfig[];

  @SpeakeasyMetadata({ data: "json, name=outbound_policy" })
  outboundPolicy?: RulesOutboundPolicyEnum;
}
