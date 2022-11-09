import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchQosRulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qosRuleId" })
  qosRuleId: string;
}

export enum UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum {
    Any = "ANY"
,    Tcp = "TCP"
,    Udp = "UDP"
}


export class UpdateNetworkSwitchQosRuleRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dscp" })
  dscp?: number;

  @Metadata({ data: "json, name=dstPort" })
  dstPort?: number;

  @Metadata({ data: "json, name=dstPortRange" })
  dstPortRange?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: number;

  @Metadata({ data: "json, name=srcPortRange" })
  srcPortRange?: string;

  @Metadata({ data: "json, name=vlan" })
  vlan?: number;
}


export class UpdateNetworkSwitchQosRuleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchQosRulePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchQosRuleRequestBody;
}


export class UpdateNetworkSwitchQosRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchQosRule200ApplicationJsonObject?: Map<string, any>;
}
