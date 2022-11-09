import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rendezvousPointId" })
  rendezvousPointId: string;
}


export class GetNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchRoutingMulticastRendezvousPointPathParams;
}


export class GetNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJsonObject?: Map<string, any>;
}
