import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchPortsStatusesPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceSwitchPortsStatusesQueryParams extends SpeakeasyBase {
    t0?: string;
    timespan?: number;
}
export declare class GetDeviceSwitchPortsStatusesRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchPortsStatusesPathParams;
    queryParams: GetDeviceSwitchPortsStatusesQueryParams;
}
export declare class GetDeviceSwitchPortsStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchPortsStatuses200ApplicationJsonObject?: Map<string, any>;
}
