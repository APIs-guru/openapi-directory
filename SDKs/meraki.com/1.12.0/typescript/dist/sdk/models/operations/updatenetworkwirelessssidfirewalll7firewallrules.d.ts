import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum {
    Deny = "deny"
}
export declare enum UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules extends SpeakeasyBase {
    policy?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
    type?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
    value?: string;
}
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody extends SpeakeasyBase {
    rules?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBodyRules[];
}
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidFirewallL7FirewallRulesPathParams;
    request?: UpdateNetworkWirelessSsidFirewallL7FirewallRulesRequestBody;
}
export declare class UpdateNetworkWirelessSsidFirewallL7FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidFirewallL7FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
