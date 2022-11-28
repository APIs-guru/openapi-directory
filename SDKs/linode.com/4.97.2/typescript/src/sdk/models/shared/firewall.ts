import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleConfig } from "./firewallruleconfig";


export enum FirewallRulesInboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}

export enum FirewallRulesOutboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}


// FirewallRules
/** 
 * The inbound and outbound access rules to apply to the Firewall.
 * 
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 * 
**/
export class FirewallRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inbound", elemType: FirewallRuleConfig })
  inbound?: FirewallRuleConfig[];

  @SpeakeasyMetadata({ data: "json, name=inbound_policy" })
  inboundPolicy?: FirewallRulesInboundPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=outbound", elemType: FirewallRuleConfig })
  outbound?: FirewallRuleConfig[];

  @SpeakeasyMetadata({ data: "json, name=outbound_policy" })
  outboundPolicy?: FirewallRulesOutboundPolicyEnum;
}

export enum FirewallStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Deleted = "deleted"
}


// Firewall
/** 
 * A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
 * 
**/
export class Firewall extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules?: FirewallRules;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FirewallStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}
