import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallL3FirewallRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceFirewallL3FirewallRulesPathParams;
}
export declare class GetNetworkApplianceFirewallL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
