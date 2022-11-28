import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkPiiRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=requestId" })
  requestId: string;
}


export class GetNetworkPiiRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkPiiRequestPathParams;
}


export class GetNetworkPiiRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkPiiRequest200ApplicationJsonObject?: Map<string, any>;
}
