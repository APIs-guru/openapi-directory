import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceStaticRoutesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceStaticRoutesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceStaticRoutesPathParams;
}


export class GetNetworkApplianceStaticRoutesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceStaticRoutes200ApplicationJsonObject?: Map<string, any>;
}
