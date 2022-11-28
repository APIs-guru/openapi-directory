import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;
}


export class UpdateDeviceSwitchRoutingStaticRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiseViaOspfEnabled" })
  advertiseViaOspfEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextHopIp" })
  nextHopIp?: string;

  @SpeakeasyMetadata({ data: "json, name=preferOverOspfRoutesEnabled" })
  preferOverOspfRoutesEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;
}


export class UpdateDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceSwitchRoutingStaticRoutePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceSwitchRoutingStaticRouteRequestBody;
}


export class UpdateDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceSwitchRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
