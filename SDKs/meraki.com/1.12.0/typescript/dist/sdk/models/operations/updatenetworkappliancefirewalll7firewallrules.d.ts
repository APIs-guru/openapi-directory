import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceFirewallL7FirewallRulesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum {
    Deny = "deny"
}
export declare enum UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}
export declare class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules extends SpeakeasyBase {
    policy?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;
    type?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum;
    value?: string;
}
export declare class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody extends SpeakeasyBase {
    rules?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules[];
}
export declare class UpdateNetworkApplianceFirewallL7FirewallRulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceFirewallL7FirewallRulesPathParams;
    request?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
}
export declare class UpdateNetworkApplianceFirewallL7FirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceFirewallL7FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
