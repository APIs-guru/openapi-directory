import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSwitchStackRoutingStaticRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class CreateNetworkSwitchStackRoutingStaticRouteRequestBody extends SpeakeasyBase {
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


export class CreateNetworkSwitchStackRoutingStaticRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSwitchStackRoutingStaticRoutePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSwitchStackRoutingStaticRouteRequestBody;
}


export class CreateNetworkSwitchStackRoutingStaticRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSwitchStackRoutingStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
