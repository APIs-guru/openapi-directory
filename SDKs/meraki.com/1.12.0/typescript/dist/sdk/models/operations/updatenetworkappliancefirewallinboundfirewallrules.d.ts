import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules extends SpeakeasyBase {
    comment?: string;
    destCidr: string;
    destPort?: string;
    policy: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;
    protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;
    srcCidr: string;
    srcPort?: string;
    syslogEnabled?: boolean;
}
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody extends SpeakeasyBase {
    rules?: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[];
    syslogDefaultRule?: boolean;
}
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams;
    request?: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
}
export declare class UpdateNetworkApplianceFirewallInboundFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
