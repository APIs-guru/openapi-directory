import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWebhooksWebhookTestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webhookTestId" })
  webhookTestId: string;
}


export class GetNetworkWebhooksWebhookTestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWebhooksWebhookTestPathParams;
}


export class GetNetworkWebhooksWebhookTestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWebhooksWebhookTest200ApplicationJsonObject?: Map<string, any>;
}
