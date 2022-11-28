import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidFirewallL7FirewallRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams;
}
export declare class GetNetworkWirelessSsidFirewallL7FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
