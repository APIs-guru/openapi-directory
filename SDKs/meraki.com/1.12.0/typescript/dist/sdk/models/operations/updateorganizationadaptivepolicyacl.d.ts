import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
    id: string;
    organizationId: string;
}
export declare enum UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare enum UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}
export declare class UpdateOrganizationAdaptivePolicyAclRequestBodyRules extends SpeakeasyBase {
    dstPort?: string;
    policy: UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
    protocol: UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;
    srcPort?: string;
}
export declare class UpdateOrganizationAdaptivePolicyAclRequestBody extends SpeakeasyBase {
    description?: string;
    ipVersion?: UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
    name?: string;
    rules?: UpdateOrganizationAdaptivePolicyAclRequestBodyRules[];
}
export declare class UpdateOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationAdaptivePolicyAclPathParams;
    request?: UpdateOrganizationAdaptivePolicyAclRequestBody;
}
export declare class UpdateOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
