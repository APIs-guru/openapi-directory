import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchAccessControlListsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum {
    Any = "any"
,    Ipv4 = "ipv4"
,    Ipv6 = "ipv6"
}

export enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Any = "any"
}


export class UpdateNetworkSwitchAccessControlListsRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=dstCidr" })
  dstCidr: string;

  @Metadata({ data: "json, name=dstPort" })
  dstPort?: string;

  @Metadata({ data: "json, name=ipVersion" })
  ipVersion?: UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;

  @Metadata({ data: "json, name=policy" })
  policy: UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;

  @Metadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: string;
}


export class UpdateNetworkSwitchAccessControlListsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkSwitchAccessControlListsRequestBodyRules })
  rules: UpdateNetworkSwitchAccessControlListsRequestBodyRules[];
}


export class UpdateNetworkSwitchAccessControlListsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchAccessControlListsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSwitchAccessControlListsRequestBody;
}


export class UpdateNetworkSwitchAccessControlListsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchAccessControlLists200ApplicationJsonObject?: Map<string, any>;
}
