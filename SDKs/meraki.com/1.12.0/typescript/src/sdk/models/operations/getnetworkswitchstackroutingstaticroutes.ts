import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkSwitchStackRoutingStaticRoutesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=switchStackId" })
  switchStackId: string;
}


export class GetNetworkSwitchStackRoutingStaticRoutesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkSwitchStackRoutingStaticRoutesPathParams;
}


export class GetNetworkSwitchStackRoutingStaticRoutesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkSwitchStackRoutingStaticRoutes200ApplicationJsonObject?: Map<string, any>;
}
