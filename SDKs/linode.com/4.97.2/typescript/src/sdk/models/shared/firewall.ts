import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FirewallRuleConfig } from "./firewallruleconfig";
import { FirewallRuleConfig } from "./firewallruleconfig";

export enum FirewallRulesInboundPolicyEnum {
    Accept = "ACCEPT"
,    Drop = "DROP"
}

export enum FirewallRulesOutboundPolicyEnum {
    Accept = "ACCEPT"
,    Drop = "DROP"
}


// FirewallRules
/** 
 * The inbound and outbound access rules to apply to the Firewall.
 * 
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 * 
**/
export class FirewallRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=inbound", elemType: shared.FirewallRuleConfig })
  inbound?: FirewallRuleConfig[];

  @Metadata({ data: "json, name=inbound_policy" })
  inboundPolicy?: FirewallRulesInboundPolicyEnum;

  @Metadata({ data: "json, name=outbound", elemType: shared.FirewallRuleConfig })
  outbound?: FirewallRuleConfig[];

  @Metadata({ data: "json, name=outbound_policy" })
  outboundPolicy?: FirewallRulesOutboundPolicyEnum;
}

export enum FirewallStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
,    Deleted = "deleted"
}


// Firewall
/** 
 * A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
 * 
**/
export class Firewall extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=rules" })
  rules?: FirewallRules;

  @Metadata({ data: "json, name=status" })
  status?: FirewallStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}
