import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWebhooksHttpServerPathParams extends SpeakeasyBase {
    httpServerId: string;
    networkId: string;
}
export declare class GetNetworkWebhooksHttpServerRequest extends SpeakeasyBase {
    pathParams: GetNetworkWebhooksHttpServerPathParams;
}
export declare class GetNetworkWebhooksHttpServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWebhooksHttpServer200ApplicationJsonObject?: Map<string, any>;
}
