import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;
}


export class GetNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkApplianceStaticRoutePathParams;
}


export class GetNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkApplianceStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
