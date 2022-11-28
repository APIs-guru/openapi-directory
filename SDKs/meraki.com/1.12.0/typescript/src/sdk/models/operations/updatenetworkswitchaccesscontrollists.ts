import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchAccessControlListsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum {
    Any = "any",
    Ipv4 = "ipv4",
    Ipv6 = "ipv6"
}

export enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Any = "any"
}


export class UpdateNetworkSwitchAccessControlListsRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=dstCidr" })
  dstCidr: string;

  @SpeakeasyMetadata({ data: "json, name=dstPort" })
  dstPort?: string;

  @SpeakeasyMetadata({ data: "json, name=ipVersion" })
  ipVersion?: UpdateNetworkSwitchAccessControlListsRequestBodyRulesIpVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: UpdateNetworkSwitchAccessControlListsRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkSwitchAccessControlListsRequestBodyRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: string;
}


export class UpdateNetworkSwitchAccessControlListsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkSwitchAccessControlListsRequestBodyRules })
  rules: UpdateNetworkSwitchAccessControlListsRequestBodyRules[];
}


export class UpdateNetworkSwitchAccessControlListsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchAccessControlListsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSwitchAccessControlListsRequestBody;
}


export class UpdateNetworkSwitchAccessControlListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchAccessControlLists200ApplicationJsonObject?: Map<string, any>;
}
