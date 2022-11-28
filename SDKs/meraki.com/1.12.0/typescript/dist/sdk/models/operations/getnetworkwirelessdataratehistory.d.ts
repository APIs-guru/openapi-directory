import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessDataRateHistoryPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessDataRateHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessDataRateHistoryQueryParams extends SpeakeasyBase {
    apTag?: string;
    autoResolution?: boolean;
    band?: GetNetworkWirelessDataRateHistoryBandEnum;
    clientId?: string;
    deviceSerial?: string;
    resolution?: number;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkWirelessDataRateHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessDataRateHistoryPathParams;
    queryParams: GetNetworkWirelessDataRateHistoryQueryParams;
}
export declare class GetNetworkWirelessDataRateHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessDataRateHistory200ApplicationJsonObject?: Map<string, any>;
}
