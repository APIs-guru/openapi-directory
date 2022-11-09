import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;
}


export class UpdateDeviceSwitchRoutingStaticRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiseViaOspfEnabled" })
  advertiseViaOspfEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextHopIp" })
  nextHopIp?: string;

  @Metadata({ data: "json, name=preferOverOspfRoutesEnabled" })
  preferOverOspfRoutesEnabled?: boolean;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;
}


export class UpdateDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceSwitchRoutingStaticRoutePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceSwitchRoutingStaticRouteRequestBody;
}


export class UpdateDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceSwitchRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
