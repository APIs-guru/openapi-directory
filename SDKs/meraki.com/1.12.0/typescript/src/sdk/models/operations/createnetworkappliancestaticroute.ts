import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkApplianceStaticRouteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=gatewayIp" })
  gatewayIp: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=subnet" })
  subnet: string;
}


export class CreateNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkApplianceStaticRoutePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkApplianceStaticRouteRequestBody;
}


export class CreateNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkApplianceStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
