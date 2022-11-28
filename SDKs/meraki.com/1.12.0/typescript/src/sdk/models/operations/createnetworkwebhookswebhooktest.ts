import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkWebhooksWebhookTestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkWebhooksWebhookTestRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sharedSecret" })
  sharedSecret?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class CreateNetworkWebhooksWebhookTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkWebhooksWebhookTestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkWebhooksWebhookTestRequestBody;
}


export class CreateNetworkWebhooksWebhookTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkWebhooksWebhookTest201ApplicationJsonObject?: Map<string, any>;
}
