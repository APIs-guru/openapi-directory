import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchRoutingMulticastRendezvousPointsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams;
}


export class GetNetworkSwitchRoutingMulticastRendezvousPointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchRoutingMulticastRendezvousPoints200ApplicationJsonObject?: Map<string, any>;
}
