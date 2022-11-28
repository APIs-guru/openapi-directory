import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceDesktopLogsPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceDesktopLogsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetNetworkSmDeviceDesktopLogsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceDesktopLogsPathParams;
    queryParams: GetNetworkSmDeviceDesktopLogsQueryParams;
}
export declare class GetNetworkSmDeviceDesktopLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkSmDeviceDesktopLogs200ApplicationJsonObject?: Map<string, any>;
}
