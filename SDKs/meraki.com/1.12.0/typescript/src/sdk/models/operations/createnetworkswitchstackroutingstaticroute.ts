import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class CreateNetworkSwitchStackRoutingStaticRouteRequestBody extends SpeakeasyBase {
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


export class CreateNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSwitchStackRoutingStaticRoutePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchStackRoutingStaticRouteRequestBody;
}


export class CreateNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSwitchStackRoutingStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
