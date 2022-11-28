import { SpeakeasyBase } from "../../../internal/utils";
import { FirewallRuleConfig } from "./firewallruleconfig";
export declare enum RulesInboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}
export declare enum RulesOutboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}
/**
 * The inbound and outbound access rules to apply to the Firewall.
 *
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 *
**/
export declare class Rules extends SpeakeasyBase {
    inbound?: FirewallRuleConfig[];
    inboundPolicy?: RulesInboundPolicyEnum;
    outbound?: FirewallRuleConfig[];
    outboundPolicy?: RulesOutboundPolicyEnum;
}
