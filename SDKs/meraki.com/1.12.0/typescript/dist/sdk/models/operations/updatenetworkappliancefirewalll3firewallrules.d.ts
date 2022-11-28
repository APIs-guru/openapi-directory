import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}
export declare class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules extends SpeakeasyBase {
    comment?: string;
    destCidr: string;
    destPort?: string;
    policy: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;
    protocol: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
    srcCidr: string;
    srcPort?: string;
    syslogEnabled?: boolean;
}
export declare class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody extends SpeakeasyBase {
    rules?: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules[];
    syslogDefaultRule?: boolean;
}
export declare class UpdateNetworkApplianceFirewallL3FirewallRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceFirewallL3FirewallRulesPathParams;
    request?: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
}
export declare class UpdateNetworkApplianceFirewallL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
