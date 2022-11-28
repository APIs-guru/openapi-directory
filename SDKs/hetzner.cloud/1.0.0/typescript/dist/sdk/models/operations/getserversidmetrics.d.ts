import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetServersIdMetricsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetServersIdMetricsTypeEnum {
    Cpu = "cpu",
    Disk = "disk",
    Network = "network"
}
export declare class GetServersIdMetricsQueryParams extends SpeakeasyBase {
    end: string;
    start: string;
    step?: string;
    type: GetServersIdMetricsTypeEnum;
}
export declare class GetServersIdMetrics200ApplicationJsonMetricsTimeSeries extends SpeakeasyBase {
    values: any[][];
}
export declare class GetServersIdMetrics200ApplicationJsonMetrics extends SpeakeasyBase {
    end: string;
    start: string;
    step: number;
    timeSeries: Map<string, GetServersIdMetrics200ApplicationJsonMetricsTimeSeries>;
}
export declare class GetServersIdMetrics200ApplicationJson extends SpeakeasyBase {
    metrics: GetServersIdMetrics200ApplicationJsonMetrics;
}
export declare class GetServersIdMetricsRequest extends SpeakeasyBase {
    pathParams: GetServersIdMetricsPathParams;
    queryParams: GetServersIdMetricsQueryParams;
}
export declare class GetServersIdMetricsResponse extends SpeakeasyBase {
    contentType: string;
    getServersIdMetrics200ApplicationJsonObject?: GetServersIdMetrics200ApplicationJson;
    statusCode: number;
}
