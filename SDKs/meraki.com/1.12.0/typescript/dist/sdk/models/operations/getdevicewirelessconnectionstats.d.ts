import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceWirelessConnectionStatsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare enum GetDeviceWirelessConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetDeviceWirelessConnectionStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetDeviceWirelessConnectionStatsBandEnum;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetDeviceWirelessConnectionStatsRequest extends SpeakeasyBase {
    pathParams: GetDeviceWirelessConnectionStatsPathParams;
    queryParams: GetDeviceWirelessConnectionStatsQueryParams;
}
export declare class GetDeviceWirelessConnectionStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceWirelessConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
