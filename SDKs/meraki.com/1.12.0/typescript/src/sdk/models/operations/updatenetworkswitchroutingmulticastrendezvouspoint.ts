import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rendezvousPointId" })
  rendezvousPointId: string;
}


export class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=interfaceIp" })
  interfaceIp: string;

  @Metadata({ data: "json, name=multicastGroup" })
  multicastGroup: string;
}


export class UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchRoutingMulticastRendezvousPointPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
}


export class UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchRoutingMulticastRendezvousPoint200ApplicationJsonObject?: Map<string, any>;
}
