import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}

export enum UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}


export class UpdateOrganizationAdaptivePolicyAclRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dstPort" })
  dstPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: UpdateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: string;
}


export class UpdateOrganizationAdaptivePolicyAclRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ipVersion" })
  ipVersion?: UpdateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateOrganizationAdaptivePolicyAclRequestBodyRules })
  rules?: UpdateOrganizationAdaptivePolicyAclRequestBodyRules[];
}


export class UpdateOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationAdaptivePolicyAclPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationAdaptivePolicyAclRequestBody;
}


export class UpdateOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
