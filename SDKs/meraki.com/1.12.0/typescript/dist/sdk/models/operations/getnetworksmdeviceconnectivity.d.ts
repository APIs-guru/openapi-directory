import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceConnectivityPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceConnectivityQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetNetworkSmDeviceConnectivityRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceConnectivityPathParams;
    queryParams: GetNetworkSmDeviceConnectivityQueryParams;
}
export declare class GetNetworkSmDeviceConnectivityResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkSmDeviceConnectivity200ApplicationJsonObject?: Map<string, any>;
}
