import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rendezvousPointId" })
  rendezvousPointId: string;
}


export class DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNetworkSwitchRoutingMulticastRendezvousPointPathParams;
}


export class DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
