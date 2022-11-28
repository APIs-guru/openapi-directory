import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceFirewallPortForwardingRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallPortForwardingRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceFirewallPortForwardingRulesPathParams;
}
export declare class GetNetworkApplianceFirewallPortForwardingRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceFirewallPortForwardingRules200ApplicationJsonObject?: Map<string, any>;
}
