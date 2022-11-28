import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceLossAndLatencyHistoryPathParams extends SpeakeasyBase {
    serial: string;
}
export declare enum GetDeviceLossAndLatencyHistoryUplinkEnum {
    Wan1 = "wan1",
    Wan2 = "wan2",
    Cellular = "cellular"
}
export declare class GetDeviceLossAndLatencyHistoryQueryParams extends SpeakeasyBase {
    ip: string;
    resolution?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    uplink?: GetDeviceLossAndLatencyHistoryUplinkEnum;
}
export declare class GetDeviceLossAndLatencyHistoryRequest extends SpeakeasyBase {
    pathParams: GetDeviceLossAndLatencyHistoryPathParams;
    queryParams: GetDeviceLossAndLatencyHistoryQueryParams;
}
export declare class GetDeviceLossAndLatencyHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceLossAndLatencyHistory200ApplicationJsonObject?: Map<string, any>;
}
