import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkApplianceStaticRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=staticRouteId" })
  staticRouteId: string;
}


export class DeleteNetworkApplianceStaticRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkApplianceStaticRoutePathParams;
}


export class DeleteNetworkApplianceStaticRouteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
