import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkPiiPiiKeysPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkPiiPiiKeysQueryParams extends SpeakeasyBase {
    bluetoothMac?: string;
    email?: string;
    imei?: string;
    mac?: string;
    serial?: string;
    username?: string;
}
export declare class GetNetworkPiiPiiKeysRequest extends SpeakeasyBase {
    pathParams: GetNetworkPiiPiiKeysPathParams;
    queryParams: GetNetworkPiiPiiKeysQueryParams;
}
export declare class GetNetworkPiiPiiKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkPiiPiiKeys200ApplicationJsonObject?: Map<string, any>;
}
