import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interfaceIp" })
  interfaceIp: string;

  @SpeakeasyMetadata({ data: "json, name=multicastGroup" })
  multicastGroup: string;
}


export class CreateNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
}


export class CreateNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJsonObject?: Map<string, any>;
}
