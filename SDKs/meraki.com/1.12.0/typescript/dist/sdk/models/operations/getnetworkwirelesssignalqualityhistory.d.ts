import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSignalQualityHistoryPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessSignalQualityHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessSignalQualityHistoryQueryParams extends SpeakeasyBase {
    apTag?: string;
    autoResolution?: boolean;
    band?: GetNetworkWirelessSignalQualityHistoryBandEnum;
    clientId?: string;
    deviceSerial?: string;
    resolution?: number;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkWirelessSignalQualityHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSignalQualityHistoryPathParams;
    queryParams: GetNetworkWirelessSignalQualityHistoryQueryParams;
}
export declare class GetNetworkWirelessSignalQualityHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSignalQualityHistory200ApplicationJsonObject?: Map<string, any>;
}
