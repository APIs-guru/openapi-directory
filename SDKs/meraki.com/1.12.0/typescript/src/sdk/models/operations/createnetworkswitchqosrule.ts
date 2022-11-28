import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSwitchQosRulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkSwitchQosRuleRequestBodyProtocolEnum {
    Any = "ANY",
    Tcp = "TCP",
    Udp = "UDP"
}


export class CreateNetworkSwitchQosRuleRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dscp" })
  dscp?: number;

  @SpeakeasyMetadata({ data: "json, name=dstPort" })
  dstPort?: number;

  @SpeakeasyMetadata({ data: "json, name=dstPortRange" })
  dstPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: CreateNetworkSwitchQosRuleRequestBodyProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: number;

  @SpeakeasyMetadata({ data: "json, name=srcPortRange" })
  srcPortRange?: string;

  @SpeakeasyMetadata({ data: "json, name=vlan" })
  vlan: number;
}


export class CreateNetworkSwitchQosRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSwitchQosRulePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchQosRuleRequestBody;
}


export class CreateNetworkSwitchQosRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSwitchQosRule201ApplicationJsonObject?: Map<string, any>;
}
