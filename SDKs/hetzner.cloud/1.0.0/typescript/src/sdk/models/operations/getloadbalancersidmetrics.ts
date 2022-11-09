import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLoadBalancersIdMetricsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetLoadBalancersIdMetricsTypeEnum {
    OpenConnections = "open_connections"
,    ConnectionsPerSecond = "connections_per_second"
,    RequestsPerSecond = "requests_per_second"
,    Bandwidth = "bandwidth"
}


export class GetLoadBalancersIdMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=step" })
  step?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GetLoadBalancersIdMetricsTypeEnum;
}


export class GetLoadBalancersIdMetricsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLoadBalancersIdMetricsPathParams;

  @Metadata()
  queryParams: GetLoadBalancersIdMetricsQueryParams;
}


export class GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values: any[][];
}


export class GetLoadBalancersIdMetrics200ApplicationJsonMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;

  @Metadata({ data: "json, name=step" })
  step: number;

  @Metadata({ data: "json, name=time_series", elemType: operations.GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries })
  timeSeries: Map<string, GetLoadBalancersIdMetrics200ApplicationJsonMetricsTimeSeries>;
}


export class GetLoadBalancersIdMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics" })
  metrics: GetLoadBalancersIdMetrics200ApplicationJsonMetrics;
}


export class GetLoadBalancersIdMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getLoadBalancersIdMetrics200ApplicationJsonObject?: GetLoadBalancersIdMetrics200ApplicationJson;

  @Metadata()
  statusCode: number;
}
