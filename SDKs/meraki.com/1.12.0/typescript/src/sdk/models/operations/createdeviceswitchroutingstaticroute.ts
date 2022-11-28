import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class CreateDeviceSwitchRoutingStaticRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiseViaOspfEnabled" })
  advertiseViaOspfEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextHopIp" })
  nextHopIp: string;

  @SpeakeasyMetadata({ data: "json, name=preferOverOspfRoutesEnabled" })
  preferOverOspfRoutesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet: string;
}


export class CreateDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateDeviceSwitchRoutingStaticRoutePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateDeviceSwitchRoutingStaticRouteRequestBody;
}


export class CreateDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDeviceSwitchRoutingStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
