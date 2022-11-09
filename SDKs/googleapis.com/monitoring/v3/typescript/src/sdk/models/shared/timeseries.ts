import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonitoredResourceMetadata } from "./monitoredresourcemetadata";
import { Metric } from "./metric";
import { Point } from "./point";
import { MonitoredResource } from "./monitoredresource";

export enum TimeSeriesMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED"
,    Gauge = "GAUGE"
,    Delta = "DELTA"
,    Cumulative = "CUMULATIVE"
}

export enum TimeSeriesValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED"
,    Bool = "BOOL"
,    Int64 = "INT64"
,    Double = "DOUBLE"
,    String = "STRING"
,    Distribution = "DISTRIBUTION"
,    Money = "MONEY"
}


// TimeSeries
/** 
 * A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
**/
export class TimeSeries extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: MonitoredResourceMetadata;

  @Metadata({ data: "json, name=metric" })
  metric?: Metric;

  @Metadata({ data: "json, name=metricKind" })
  metricKind?: TimeSeriesMetricKindEnum;

  @Metadata({ data: "json, name=points", elemType: shared.Point })
  points?: Point[];

  @Metadata({ data: "json, name=resource" })
  resource?: MonitoredResource;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=valueType" })
  valueType?: TimeSeriesValueTypeEnum;
}
