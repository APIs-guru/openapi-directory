import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;
}


export class DeleteDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteDeviceSwitchRoutingStaticRoutePathParams;
}


export class DeleteDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
