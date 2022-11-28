import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FirewallRuleConfigActionEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}


// FirewallRuleConfigAddresses
/** 
 * Allowed IPv4 or IPv6 addresses. A Rule can have up to 255 addresses or networks listed across its IPv4 and IPv6 arrays. A network and a single IP are treated as equivalent when accounting for this limit.
 * 
**/
export class FirewallRuleConfigAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ipv4" })
  ipv4?: string[];

  @SpeakeasyMetadata({ data: "json, name=ipv6" })
  ipv6?: string[];
}

export enum FirewallRuleConfigProtocolEnum {
    Tcp = "TCP",
    Udp = "UDP",
    Icmp = "ICMP"
}


// FirewallRuleConfig
/** 
 * One of a Firewall's inbound or outbound access rules. The `ports` property can be used to allow traffic on a comma-separated list of different ports.
 * 
**/
export class FirewallRuleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FirewallRuleConfigActionEnum;

  @SpeakeasyMetadata({ data: "json, name=addresses" })
  addresses?: FirewallRuleConfigAddresses;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=ports" })
  ports?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: FirewallRuleConfigProtocolEnum;
}
