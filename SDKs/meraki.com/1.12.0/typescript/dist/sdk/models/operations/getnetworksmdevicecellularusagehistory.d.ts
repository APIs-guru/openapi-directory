import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmDeviceCellularUsageHistoryPathParams extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceCellularUsageHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmDeviceCellularUsageHistoryPathParams;
}
export declare class GetNetworkSmDeviceCellularUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmDeviceCellularUsageHistory200ApplicationJsonObject?: Map<string, any>;
}
