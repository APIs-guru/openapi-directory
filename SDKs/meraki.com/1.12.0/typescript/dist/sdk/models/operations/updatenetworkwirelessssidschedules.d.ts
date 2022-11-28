import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidSchedulesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidSchedulesRequestBodyRanges extends SpeakeasyBase {
    endDay: string;
    endTime: string;
    startDay: string;
    startTime: string;
}
export declare class UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds extends SpeakeasyBase {
    end: number;
    start: number;
}
export declare class UpdateNetworkWirelessSsidSchedulesRequestBody extends SpeakeasyBase {
    enabled?: boolean;
    ranges?: UpdateNetworkWirelessSsidSchedulesRequestBodyRanges[];
    rangesInSeconds?: UpdateNetworkWirelessSsidSchedulesRequestBodyRangesInSeconds[];
}
export declare class UpdateNetworkWirelessSsidSchedulesRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidSchedulesPathParams;
    request?: UpdateNetworkWirelessSsidSchedulesRequestBody;
}
export declare class UpdateNetworkWirelessSsidSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidSchedules200ApplicationJsonObject?: Map<string, any>;
}
