import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetLoadBalancersIdMetricsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetLoadBalancersIdMetricsTypeEnum {
    OpenConnections = "open_connections",
    ConnectionsPerSecond = "connections_per_second",
    RequestsPerSecond = "requests_per_second",
    Bandwidth = "bandwidth"
}
export declare class GetLoadBalancersIdMetricsQueryParams extends SpeakeasyBase {
    end: string;
    start: string;
    step?: string;
    type: GetLoadBalancersIdMetricsTypeEnum;
}
export declare class GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries extends SpeakeasyBase {
    values: any[][];
}
export declare class GetLoadBalancersIdMetrics200ApplicationJsonMetrics extends SpeakeasyBase {
    end: string;
    start: string;
    step: number;
    timeSeries: Map<string, GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries>;
}
export declare class GetLoadBalancersIdMetrics200ApplicationJson extends SpeakeasyBase {
    metrics: GetLoadBalancersIdMetrics200ApplicationJsonMetrics;
}
export declare class GetLoadBalancersIdMetricsRequest extends SpeakeasyBase {
    pathParams: GetLoadBalancersIdMetricsPathParams;
    queryParams: GetLoadBalancersIdMetricsQueryParams;
}
export declare class GetLoadBalancersIdMetricsResponse extends SpeakeasyBase {
    contentType: string;
    getLoadBalancersIdMetrics200ApplicationJsonObject?: GetLoadBalancersIdMetrics200ApplicationJson;
    statusCode: number;
}
