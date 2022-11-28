import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateOrganizationAdaptivePolicyAclPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}

export enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}


export class CreateOrganizationAdaptivePolicyAclRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dstPort" })
  dstPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: CreateOrganizationAdaptivePolicyAclRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: CreateOrganizationAdaptivePolicyAclRequestBodyRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: string;
}


export class CreateOrganizationAdaptivePolicyAclRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ipVersion" })
  ipVersion: CreateOrganizationAdaptivePolicyAclRequestBodyIpVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: CreateOrganizationAdaptivePolicyAclRequestBodyRules })
  rules: CreateOrganizationAdaptivePolicyAclRequestBodyRules[];
}


export class CreateOrganizationAdaptivePolicyAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateOrganizationAdaptivePolicyAclPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateOrganizationAdaptivePolicyAclRequestBody;
}


export class CreateOrganizationAdaptivePolicyAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createOrganizationAdaptivePolicyAcl200ApplicationJsonObject?: Map<string, any>;
}
