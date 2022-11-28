import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkPiiRequestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkPiiRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkPiiRequestsPathParams;
}


export class GetNetworkPiiRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkPiiRequests200ApplicationJsonObject?: Map<string, any>;
}
