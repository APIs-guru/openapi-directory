import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkWebhooksWebhookTestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkWebhooksWebhookTestRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=sharedSecret" })
  sharedSecret?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class CreateNetworkWebhooksWebhookTestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkWebhooksWebhookTestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkWebhooksWebhookTestRequestBody;
}


export class CreateNetworkWebhooksWebhookTestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkWebhooksWebhookTest201ApplicationJsonObject?: Map<string, any>;
}
