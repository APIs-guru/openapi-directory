import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceWirelessLatencyStatsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare enum GetDeviceWirelessLatencyStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetDeviceWirelessLatencyStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetDeviceWirelessLatencyStatsBandEnum;
    fields?: string;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetDeviceWirelessLatencyStatsRequest extends SpeakeasyBase {
    pathParams: GetDeviceWirelessLatencyStatsPathParams;
    queryParams: GetDeviceWirelessLatencyStatsQueryParams;
}
export declare class GetDeviceWirelessLatencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceWirelessLatencyStats200ApplicationJsonObject?: Map<string, any>;
}
