import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallRuleConfig } from "./firewallruleconfig";
import { FirewallRuleConfig } from "./firewallruleconfig";

export enum RulesInboundPolicyEnum {
    Accept = "ACCEPT"
,    Drop = "DROP"
}

export enum RulesOutboundPolicyEnum {
    Accept = "ACCEPT"
,    Drop = "DROP"
}


// Rules
/** 
 * The inbound and outbound access rules to apply to the Firewall.
 * 
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 * 
**/
export class Rules extends SpeakeasyBase {
  @Metadata({ data: "json, name=inbound", elemType: shared.FirewallRuleConfig })
  inbound?: FirewallRuleConfig[];

  @Metadata({ data: "json, name=inbound_policy" })
  inboundPolicy?: RulesInboundPolicyEnum;

  @Metadata({ data: "json, name=outbound", elemType: shared.FirewallRuleConfig })
  outbound?: FirewallRuleConfig[];

  @Metadata({ data: "json, name=outbound_policy" })
  outboundPolicy?: RulesOutboundPolicyEnum;
}
