import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetServersIdMetricsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetServersIdMetricsTypeEnum {
    Cpu = "cpu"
,    Disk = "disk"
,    Network = "network"
}


export class GetServersIdMetricsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=step" })
  step?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GetServersIdMetricsTypeEnum;
}


export class GetServersIdMetricsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetServersIdMetricsPathParams;

  @Metadata()
  queryParams: GetServersIdMetricsQueryParams;
}


export class GetServersIdMetrics200ApplicationJsonMetricsTimeSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values: any[][];
}


export class GetServersIdMetrics200ApplicationJsonMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end: string;

  @Metadata({ data: "json, name=start" })
  start: string;

  @Metadata({ data: "json, name=step" })
  step: number;

  @Metadata({ data: "json, name=time_series", elemType: operations.GetServersIdMetrics200ApplicationJsonMetricsTimeSeries })
  timeSeries: Map<string, GetServersIdMetrics200ApplicationJsonMetricsTimeSeries>;
}


export class GetServersIdMetrics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=metrics" })
  metrics: GetServersIdMetrics200ApplicationJsonMetrics;
}


export class GetServersIdMetricsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getServersIdMetrics200ApplicationJsonObject?: GetServersIdMetrics200ApplicationJson;

  @Metadata()
  statusCode: number;
}
