import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules extends SpeakeasyBase {
    allowedIps?: string[];
    localIp?: string;
    localPort?: string;
    name?: string;
    protocol?: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRulesProtocolEnum;
    publicPort?: string;
}
export declare enum UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum {
    Internet1 = "internet1",
    Internet2 = "internet2"
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules extends SpeakeasyBase {
    portRules: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesPortRules[];
    publicIp: string;
    uplink: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRulesUplinkEnum;
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody extends SpeakeasyBase {
    rules: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceFirewallOneToManyNatRulesPathParams;
    request: UpdateNetworkApplianceFirewallOneToManyNatRulesRequestBody;
}
export declare class UpdateNetworkApplianceFirewallOneToManyNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceFirewallOneToManyNatRules200ApplicationJsonObject?: Map<string, any>;
}
