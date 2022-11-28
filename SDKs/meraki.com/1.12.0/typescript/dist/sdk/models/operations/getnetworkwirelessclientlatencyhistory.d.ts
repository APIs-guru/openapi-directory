import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessClientLatencyHistoryPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare class GetNetworkWirelessClientLatencyHistoryQueryParams extends SpeakeasyBase {
    resolution?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkWirelessClientLatencyHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessClientLatencyHistoryPathParams;
    queryParams: GetNetworkWirelessClientLatencyHistoryQueryParams;
}
export declare class GetNetworkWirelessClientLatencyHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessClientLatencyHistory200ApplicationJsonObject?: Map<string, any>;
}
