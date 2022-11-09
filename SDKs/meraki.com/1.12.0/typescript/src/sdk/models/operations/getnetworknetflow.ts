import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkNetflowPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkNetflowRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkNetflowPathParams;
}


export class GetNetworkNetflowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkNetflow200ApplicationJsonObject?: Map<string, any>;
}
