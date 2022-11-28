import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessUsageHistoryPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessUsageHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessUsageHistoryQueryParams extends SpeakeasyBase {
    apTag?: string;
    autoResolution?: boolean;
    band?: GetNetworkWirelessUsageHistoryBandEnum;
    clientId?: string;
    deviceSerial?: string;
    resolution?: number;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkWirelessUsageHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessUsageHistoryPathParams;
    queryParams: GetNetworkWirelessUsageHistoryQueryParams;
}
export declare class GetNetworkWirelessUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessUsageHistory200ApplicationJsonObject?: Map<string, any>;
}
