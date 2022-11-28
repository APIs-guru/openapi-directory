import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkWebhooksHttpServerRequestBody extends SpeakeasyBase {
    name: string;
    sharedSecret?: string;
    url: string;
}
export declare class CreateNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
    pathParams: CreateNetworkWebhooksHttpServerPathParams;
    request: CreateNetworkWebhooksHttpServerRequestBody;
}
export declare class CreateNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkWebhooksHttpServer201ApplicationJsonObject?: Map<string, any>;
}
