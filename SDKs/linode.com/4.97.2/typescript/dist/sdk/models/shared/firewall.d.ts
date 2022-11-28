import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleConfig } from "./firewallruleconfig";
export declare enum FirewallRulesInboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}
export declare enum FirewallRulesOutboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}
/**
 * The inbound and outbound access rules to apply to the Firewall.
 *
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 *
**/
export declare class FirewallRules extends SpeakeasyBase {
    inbound?: FirewallRuleConfig[];
    inboundPolicy?: FirewallRulesInboundPolicyEnum;
    outbound?: FirewallRuleConfig[];
    outboundPolicy?: FirewallRulesOutboundPolicyEnum;
}
export declare enum FirewallStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled",
    Deleted = "deleted"
}
/**
 * A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
 *
**/
export declare class Firewall extends SpeakeasyBase {
    created?: Date;
    id?: number;
    label?: string;
    rules?: FirewallRules;
    status?: FirewallStatusEnum;
    tags?: string[];
    updated?: Date;
}
