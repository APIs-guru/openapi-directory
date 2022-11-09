import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWebhooksWebhookTestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=webhookTestId" })
  webhookTestId: string;
}


export class GetNetworkWebhooksWebhookTestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWebhooksWebhookTestPathParams;
}


export class GetNetworkWebhooksWebhookTestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWebhooksWebhookTest200ApplicationJsonObject?: Map<string, any>;
}
