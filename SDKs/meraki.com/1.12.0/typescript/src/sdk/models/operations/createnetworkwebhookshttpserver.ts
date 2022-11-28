import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkWebhooksHttpServerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=sharedSecret" })
  sharedSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CreateNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkWebhooksHttpServerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkWebhooksHttpServerRequestBody;
}


export class CreateNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkWebhooksHttpServer201ApplicationJsonObject?: Map<string, any>;
}
