import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules extends SpeakeasyBase {
    comment?: string;
    destCidr: string;
    destPort?: string;
    policy: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;
    protocol: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;
    srcCidr: string;
    srcPort?: string;
    syslogEnabled?: boolean;
}
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody extends SpeakeasyBase {
    rules?: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[];
    syslogDefaultRule?: boolean;
}
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams;
    request?: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
}
export declare class UpdateOrganizationApplianceVpnVpnFirewallRulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
