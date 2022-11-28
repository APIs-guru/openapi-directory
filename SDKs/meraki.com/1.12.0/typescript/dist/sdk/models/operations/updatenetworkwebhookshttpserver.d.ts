import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
    httpServerId: string;
    networkId: string;
}
export declare class UpdateNetworkWebhooksHttpServerRequestBody extends SpeakeasyBase {
    name?: string;
    sharedSecret?: string;
    url?: string;
}
export declare class UpdateNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWebhooksHttpServerPathParams;
    request?: UpdateNetworkWebhooksHttpServerRequestBody;
}
export declare class UpdateNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWebhooksHttpServer200ApplicationJsonObject?: Map<string, any>;
}
