import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSwitchQosRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkSwitchQosRuleRequestBodyProtocolEnum {
    Any = "ANY"
,    Tcp = "TCP"
,    Udp = "UDP"
}


export class CreateNetworkSwitchQosRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dscp" })
  dscp?: number;

  @Metadata({ data: "json, name=dstPort" })
  dstPort?: number;

  @Metadata({ data: "json, name=dstPortRange" })
  dstPortRange?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: number;

  @Metadata({ data: "json, name=srcPortRange" })
  srcPortRange?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan: number;
}


export class CreateNetworkSwitchQosRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSwitchQosRulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchQosRuleRequestBody;
}


export class CreateNetworkSwitchQosRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSwitchQosRule201ApplicationJsonObject?: Map<string, any>;
}
