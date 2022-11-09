import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchRoutingMulticastPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchRoutingMulticastRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchRoutingMulticastPathParams;
}


export class GetNetworkSwitchRoutingMulticastResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchRoutingMulticast200ApplicationJsonObject?: Map<string, any>;
}
