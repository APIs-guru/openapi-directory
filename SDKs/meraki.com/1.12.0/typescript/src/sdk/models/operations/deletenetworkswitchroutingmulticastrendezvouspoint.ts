import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rendezvousPointId" })
  rendezvousPointId: string;
}


export class DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams;
}


export class DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
