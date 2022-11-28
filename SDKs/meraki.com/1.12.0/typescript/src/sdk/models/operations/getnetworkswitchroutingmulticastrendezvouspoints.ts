import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchRoutingMulticastRendezvousPointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams;
}


export class GetNetworkSwitchRoutingMulticastRendezvousPointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJsonObject?: Map<string, any>;
}
