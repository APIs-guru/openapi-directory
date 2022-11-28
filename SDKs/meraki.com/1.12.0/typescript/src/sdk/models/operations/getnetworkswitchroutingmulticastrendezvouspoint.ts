import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rendezvousPointId" })
  rendezvousPointId: string;
}


export class GetNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSwitchRoutingMulticastRendezvousPointPathParams;
}


export class GetNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJsonObject?: Map<string, any>;
}
