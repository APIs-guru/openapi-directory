import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchPortsStatusesPacketsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceSwitchPortsStatusesPacketsQueryParams extends SpeakeasyBase {
    t0?: string;
    timespan?: number;
}
export declare class GetDeviceSwitchPortsStatusesPacketsRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchPortsStatusesPacketsPathParams;
    queryParams: GetDeviceSwitchPortsStatusesPacketsQueryParams;
}
export declare class GetDeviceSwitchPortsStatusesPacketsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchPortsStatusesPackets200ApplicationJsonObject?: Map<string, any>;
}
