import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkWebhooksHttpServerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=sharedSecret" })
  sharedSecret?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CreateNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkWebhooksHttpServerPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkWebhooksHttpServerRequestBody;
}


export class CreateNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkWebhooksHttpServer201ApplicationJsonObject?: Map<string, any>;
}
