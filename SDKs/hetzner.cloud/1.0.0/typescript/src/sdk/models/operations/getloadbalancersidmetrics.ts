import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLoadBalancersIdMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetLoadBalancersIdMetricsTypeEnum {
    OpenConnections = "open_connections",
    ConnectionsPerSecond = "connections_per_second",
    RequestsPerSecond = "requests_per_second",
    Bandwidth = "bandwidth"
}


export class GetLoadBalancersIdMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=step" })
  step?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GetLoadBalancersIdMetricsTypeEnum;
}


export class GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values: any[][];
}


export class GetLoadBalancersIdMetrics200ApplicationJsonMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step: number;

  @SpeakeasyMetadata({ data: "json, name=time_series", elemType: GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries })
  timeSeries: Map<string, GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries>;
}


export class GetLoadBalancersIdMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetLoadBalancersIdMetrics200ApplicationJsonMetrics;
}


export class GetLoadBalancersIdMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLoadBalancersIdMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetLoadBalancersIdMetricsQueryParams;
}


export class GetLoadBalancersIdMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getLoadBalancersIdMetrics200ApplicationJsonObject?: GetLoadBalancersIdMetrics200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
