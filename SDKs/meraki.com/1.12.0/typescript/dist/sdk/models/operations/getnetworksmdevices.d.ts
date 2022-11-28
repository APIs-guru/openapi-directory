import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDevicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSmDevicesQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    fields?: string[];
    ids?: string[];
    perPage?: number;
    scope?: string[];
    serials?: string[];
    startingAfter?: string;
    wifiMacs?: string[];
}
export declare class GetNetworkSmDevicesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDevicesPathParams;
    queryParams: GetNetworkSmDevicesQueryParams;
}
export declare class GetNetworkSmDevicesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkSmDevices200ApplicationJsonObject?: Map<string, any>;
}
