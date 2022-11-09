import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=interfaceIp" })
  interfaceIp: string;

  @Metadata({ data: "json, name=multicastGroup" })
  multicastGroup: string;
}


export class CreateNetworkSwitchRoutingMulticastRendezvousPointRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSwitchRoutingMulticastRendezvousPointPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchRoutingMulticastRendezvousPointRequestBody;
}


export class CreateNetworkSwitchRoutingMulticastRendezvousPointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSwitchRoutingMulticastRendezvousPoint201ApplicationJsonObject?: Map<string, any>;
}
