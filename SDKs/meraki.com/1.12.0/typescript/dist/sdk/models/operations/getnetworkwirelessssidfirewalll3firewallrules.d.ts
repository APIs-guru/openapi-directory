import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidFirewallL3FirewallRulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidFirewallL3FirewallRulesPathParams;
}
export declare class GetNetworkWirelessSsidFirewallL3FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
