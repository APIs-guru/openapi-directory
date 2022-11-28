import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWebhooksHttpServersPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWebhooksHttpServersRequest extends SpeakeasyBase {
    pathParams: GetNetworkWebhooksHttpServersPathParams;
}
export declare class GetNetworkWebhooksHttpServersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWebhooksHttpServers200ApplicationJsonObject?: Map<string, any>;
}
