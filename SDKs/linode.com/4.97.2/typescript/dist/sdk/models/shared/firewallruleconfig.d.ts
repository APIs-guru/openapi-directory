import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FirewallRuleConfigActionEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}
/**
 * Allowed IPv4 or IPv6 addresses. A Rule can have up to 255 addresses or networks listed across its IPv4 and IPv6 arrays. A network and a single IP are treated as equivalent when accounting for this limit.
 *
**/
export declare class FirewallRuleConfigAddresses extends SpeakeasyBase {
    ipv4?: string[];
    ipv6?: string[];
}
export declare enum FirewallRuleConfigProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP",
    Icmp = "ICMP"
}
/**
 * One of a Firewall's inbound or outbound access rules. The `ports` property can be used to allow traffic on a comma-separated list of different ports.
 *
**/
export declare class FirewallRuleConfig extends SpeakeasyBase {
    action?: FirewallRuleConfigActionEnum;
    addresses?: FirewallRuleConfigAddresses;
    description?: string;
    label?: string;
    ports?: string;
    protocol: FirewallRuleConfigProtocolEnum;
}
