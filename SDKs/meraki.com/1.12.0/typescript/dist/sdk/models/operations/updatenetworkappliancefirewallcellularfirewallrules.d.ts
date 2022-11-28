import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}
export declare class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules extends SpeakeasyBase {
    comment?: string;
    destCidr: string;
    destPort?: string;
    policy: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;
    protocol: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;
    srcCidr: string;
    srcPort?: string;
    syslogEnabled?: boolean;
}
export declare class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody extends SpeakeasyBase {
    rules?: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceFirewallCellularFirewallRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams;
    request?: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
}
export declare class UpdateNetworkApplianceFirewallCellularFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
