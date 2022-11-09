import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchRoutingOspfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchRoutingOspfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchRoutingOspfPathParams;
}


export class GetNetworkSwitchRoutingOspfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchRoutingOspf200ApplicationJsonObject?: Map<string, any>;
}
