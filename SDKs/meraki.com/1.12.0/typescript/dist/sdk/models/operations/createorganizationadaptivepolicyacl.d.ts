import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}
export declare enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}
export declare enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}
export declare class CreateOrganizationAdaptivePolicyAclRequestBodyRules extends SpeakeasyBase {
    dstPort?: string;
    policy: CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;
    protocol: CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;
    srcPort?: string;
}
export declare class CreateOrganizationAdaptivePolicyAclRequestBody extends SpeakeasyBase {
    description?: string;
    ipVersion: CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;
    name: string;
    rules: CreateOrganizationAdaptivePolicyAclRequestBodyRules[];
}
export declare class CreateOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationAdaptivePolicyAclPathParams;
    request: CreateOrganizationAdaptivePolicyAclRequestBody;
}
export declare class CreateOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
