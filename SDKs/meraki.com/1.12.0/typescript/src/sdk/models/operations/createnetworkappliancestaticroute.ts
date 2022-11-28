import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkApplianceStaticRouteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gatewayIp" })
  gatewayIp: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet: string;
}


export class CreateNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkApplianceStaticRoutePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkApplianceStaticRouteRequestBody;
}


export class CreateNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkApplianceStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
