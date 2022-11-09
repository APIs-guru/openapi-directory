import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum {
    Any = "any"
,    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}

export enum UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Any = "any"
}


export class UpdateOrganizationAdaptivePolicyAclRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=dstPort" })
  dstPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: string;
}


export class UpdateOrganizationAdaptivePolicyAclRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ipVersion" })
  ipVersion?: UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=rules", elemType: operations.UpdateOrganizationAdaptivePolicyAclRequestBodyRules })
  rules?: UpdateOrganizationAdaptivePolicyAclRequestBodyRules[];
}


export class UpdateOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationAdaptivePolicyAclPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationAdaptivePolicyAclRequestBody;
}


export class UpdateOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
