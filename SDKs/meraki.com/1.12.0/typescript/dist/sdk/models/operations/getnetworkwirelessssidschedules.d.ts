import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidSchedulesPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidSchedulesRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidSchedulesPathParams;
}
export declare class GetNetworkWirelessSsidSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidSchedules200ApplicationJsonObject?: Map<string, any>;
}
