import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class GetNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchStackRoutingStaticRoutePathParams;
}


export class GetNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchStackRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
