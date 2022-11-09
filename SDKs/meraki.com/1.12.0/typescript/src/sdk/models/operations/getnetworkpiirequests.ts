import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkPiiRequestsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkPiiRequestsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkPiiRequestsPathParams;
}


export class GetNetworkPiiRequestsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkPiiRequests200ApplicationJsonObject?: Map<string, any>;
}
