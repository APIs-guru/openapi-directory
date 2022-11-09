import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchStackRoutingStaticRoutesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class GetNetworkSwitchStackRoutingStaticRoutesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchStackRoutingStaticRoutesPathParams;
}


export class GetNetworkSwitchStackRoutingStaticRoutesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchStackRoutingStaticRoutes200ApplicationJsonObject?: Map<string, any>;
}
