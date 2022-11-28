import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules extends SpeakeasyBase {
    comment?: string;
    destCidr: string;
    destPort?: string;
    policy: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
    protocol: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
}
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody extends SpeakeasyBase {
    allowLanAccess?: boolean;
    rules?: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[];
}
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams;
    request?: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
}
export declare class UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
