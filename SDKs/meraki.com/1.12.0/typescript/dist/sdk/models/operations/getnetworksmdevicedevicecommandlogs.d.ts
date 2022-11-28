import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceDeviceCommandLogsPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceDeviceCommandLogsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    perPage?: number;
    startingAfter?: string;
}
export declare class GetNetworkSmDeviceDeviceCommandLogsRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceDeviceCommandLogsPathParams;
    queryParams: GetNetworkSmDeviceDeviceCommandLogsQueryParams;
}
export declare class GetNetworkSmDeviceDeviceCommandLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkSmDeviceDeviceCommandLogs200ApplicationJsonObject?: Map<string, any>;
}
