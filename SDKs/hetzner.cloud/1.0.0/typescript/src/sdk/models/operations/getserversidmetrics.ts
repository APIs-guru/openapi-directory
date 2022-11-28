import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetServersIdMetricsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetServersIdMetricsTypeEnum {
    Cpu = "cpu",
    Disk = "disk",
    Network = "network"
}


export class GetServersIdMetricsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=step" })
  step?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type: GetServersIdMetricsTypeEnum;
}


export class GetServersIdMetrics200ApplicationJsonMetricsTimeSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values: any[][];
}


export class GetServersIdMetrics200ApplicationJsonMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start: string;

  @SpeakeasyMetadata({ data: "json, name=step" })
  step: number;

  @SpeakeasyMetadata({ data: "json, name=time_series", elemType: GetServersIdMetrics200ApplicationJsonMetricsTimeSeries })
  timeSeries: Map<string, GetServersIdMetrics200ApplicationJsonMetricsTimeSeries>;
}


export class GetServersIdMetrics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metrics" })
  metrics: GetServersIdMetrics200ApplicationJsonMetrics;
}


export class GetServersIdMetricsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetServersIdMetricsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetServersIdMetricsQueryParams;
}


export class GetServersIdMetricsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getServersIdMetrics200ApplicationJsonObject?: GetServersIdMetrics200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
