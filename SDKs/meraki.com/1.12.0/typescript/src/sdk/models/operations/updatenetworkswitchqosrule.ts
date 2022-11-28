import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchQosRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qosRuleId" })
  qosRuleId: string;
}

export enum UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum {
    Any = "ANY",
    Tcp = "TCP",
    Udp = "UDP"
}


export class UpdateNetworkSwitchQosRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dscp" })
  dscp?: number;

  @SpeakeasyMetadata({ data: "json, name=dstPort" })
  dstPort?: number;

  @SpeakeasyMetadata({ data: "json, name=dstPortRange" })
  dstPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: number;

  @SpeakeasyMetadata({ data: "json, name=srcPortRange" })
  srcPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan?: number;
}


export class UpdateNetworkSwitchQosRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchQosRulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchQosRuleRequestBody;
}


export class UpdateNetworkSwitchQosRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchQosRule200ApplicationJsonObject?: Map<string, any>;
}
