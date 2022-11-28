import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rendezvousPointId" })
  rendezvousPointId: string;
}


export class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interfaceIp" })
  interfaceIp: string;

  @SpeakeasyMetadata({ data: "json, name=multicastGroup" })
  multicastGroup: string;
}


export class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
}


export class UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJsonObject?: Map<string, any>;
}
