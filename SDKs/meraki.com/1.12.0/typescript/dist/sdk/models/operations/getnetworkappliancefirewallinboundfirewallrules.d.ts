import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceFirewallInboundFirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallInboundFirewallRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceFirewallInboundFirewallRulesPathParams;
}
export declare class GetNetworkApplianceFirewallInboundFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
