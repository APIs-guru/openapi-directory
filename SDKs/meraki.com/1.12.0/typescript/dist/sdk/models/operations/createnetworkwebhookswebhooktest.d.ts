import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkWebhooksWebhookTestPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkWebhooksWebhookTestRequestBody extends SpeakeasyBase {
    sharedSecret?: string;
    url: string;
}
export declare class CreateNetworkWebhooksWebhookTestRequest extends SpeakeasyBase {
    pathParams: CreateNetworkWebhooksWebhookTestPathParams;
    request: CreateNetworkWebhooksWebhookTestRequestBody;
}
export declare class CreateNetworkWebhooksWebhookTestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkWebhooksWebhookTest201ApplicationJsonObject?: Map<string, any>;
}
