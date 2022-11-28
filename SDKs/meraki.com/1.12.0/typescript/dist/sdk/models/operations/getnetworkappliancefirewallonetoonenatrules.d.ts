import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceFirewallOneToOneNatRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallOneToOneNatRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceFirewallOneToOneNatRulesPathParams;
}
export declare class GetNetworkApplianceFirewallOneToOneNatRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceFirewallOneToOneNatRules200ApplicationJsonObject?: Map<string, any>;
}
