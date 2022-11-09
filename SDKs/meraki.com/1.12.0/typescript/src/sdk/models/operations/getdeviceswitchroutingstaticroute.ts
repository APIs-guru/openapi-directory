import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;
}


export class GetDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceSwitchRoutingStaticRoutePathParams;
}


export class GetDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceSwitchRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
