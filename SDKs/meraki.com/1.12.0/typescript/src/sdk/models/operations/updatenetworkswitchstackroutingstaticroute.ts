import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class UpdateNetworkSwitchStackRoutingStaticRouteRequestBody extends SpeakeasyBase {
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


export class UpdateNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSwitchStackRoutingStaticRoutePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;
}


export class UpdateNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSwitchStackRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
