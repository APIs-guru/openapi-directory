import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum {
    Any = "any"
,    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}

export enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Any = "any"
}


export class CreateOrganizationAdaptivePolicyAclRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=dstPort" })
  dstPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol: CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: string;
}


export class CreateOrganizationAdaptivePolicyAclRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ipVersion" })
  ipVersion: CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=rules", elemType: operations.CreateOrganizationAdaptivePolicyAclRequestBodyRules })
  rules: CreateOrganizationAdaptivePolicyAclRequestBodyRules[];
}


export class CreateOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateOrganizationAdaptivePolicyAclPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationAdaptivePolicyAclRequestBody;
}


export class CreateOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
