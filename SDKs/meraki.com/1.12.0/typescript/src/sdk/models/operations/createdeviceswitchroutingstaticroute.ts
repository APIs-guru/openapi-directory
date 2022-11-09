import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class CreateDeviceSwitchRoutingStaticRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiseViaOspfEnabled" })
  advertiseViaOspfEnabled?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextHopIp" })
  nextHopIp: string;

  @Metadata({ data: "json, name=preferOverOspfRoutesEnabled" })
  preferOverOspfRoutesEnabled?: boolean;

  @Metadata({ data: "json, name=subnet" })
  subnet: string;
}


export class CreateDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateDeviceSwitchRoutingStaticRoutePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateDeviceSwitchRoutingStaticRouteRequestBody;
}


export class CreateDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDeviceSwitchRoutingStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
