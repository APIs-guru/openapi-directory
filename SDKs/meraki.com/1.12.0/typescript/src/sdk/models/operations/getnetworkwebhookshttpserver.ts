import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=httpServerId" })
  httpServerId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWebhooksHttpServerPathParams;
}


export class GetNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWebhooksHttpServer200ApplicationJsonObject?: Map<string, any>;
}
