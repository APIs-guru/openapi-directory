import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkNetflowPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkNetflowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkNetflowPathParams;
}


export class GetNetworkNetflowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkNetflow200ApplicationJsonObject?: Map<string, any>;
}
