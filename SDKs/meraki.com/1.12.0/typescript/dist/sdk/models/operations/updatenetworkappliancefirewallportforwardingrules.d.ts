import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceFirewallPortForwardingRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
export declare enum UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2",
    Both = "both"
}
export declare class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules extends SpeakeasyBase {
    allowedIps: string[];
    lanIp: string;
    localPort: string;
    name?: string;
    protocol: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesProtocolEnum;
    publicPort: string;
    uplink?: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRulesUplinkEnum;
}
export declare class UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody extends SpeakeasyBase {
    rules: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceFirewallPortForwardingRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceFirewallPortForwardingRulesPathParams;
    request: UpdateNetworkApplianceFirewallPortForwardingRulesRequestBody;
}
export declare class UpdateNetworkApplianceFirewallPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceFirewallPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
