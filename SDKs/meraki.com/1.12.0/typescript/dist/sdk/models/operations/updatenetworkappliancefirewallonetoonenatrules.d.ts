import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    IcmpPing = "icmp-ping",
    Any = "any"
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound extends SpeakeasyBase {
    allowedIps?: string[];
    destinationPorts?: string[];
    protocol?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInboundProtocolEnum;
}
export declare enum UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2"
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules extends SpeakeasyBase {
    allowedInbound?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesAllowedInbound[];
    lanIp: string;
    name?: string;
    publicIp?: string;
    uplink?: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRulesUplinkEnum;
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody extends SpeakeasyBase {
    rules: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceFirewallOneToOneNatRulesPathParams;
    request: UpdateNetworkApplianceFirewallOneToOneNatRulesRequestBody;
}
export declare class UpdateNetworkApplianceFirewallOneToOneNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceFirewallOneToOneNatRules200ApplicationJsonObject?: Map<string, any>;
}
