import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWebhooksWebhookTestPathParams extends SpeakeasyBase {
    networkId: string;
    webhookTestId: string;
}
export declare class GetNetworkWebhooksWebhookTestRequest extends SpeakeasyBase {
    pathParams: GetNetworkWebhooksWebhookTestPathParams;
}
export declare class GetNetworkWebhooksWebhookTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWebhooksWebhookTest200ApplicationJsonObject?: Map<string, any>;
}
