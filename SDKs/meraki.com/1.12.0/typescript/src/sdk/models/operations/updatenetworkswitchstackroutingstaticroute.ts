import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class UpdateNetworkSwitchStackRoutingStaticRouteRequestBody extends SpeakeasyBase {
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


export class UpdateNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSwitchStackRoutingStaticRoutePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSwitchStackRoutingStaticRouteRequestBody;
}


export class UpdateNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSwitchStackRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
