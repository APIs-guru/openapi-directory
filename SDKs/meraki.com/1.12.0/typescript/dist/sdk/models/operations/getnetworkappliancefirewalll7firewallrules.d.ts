import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceFirewallL7FirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallL7FirewallRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceFirewallL7FirewallRulesPathParams;
}
export declare class GetNetworkApplianceFirewallL7FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceFirewallL7FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
