import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResourceMetadata } from "./monitoredresourcemetadata";
import { Metric } from "./metric";
import { Point } from "./point";
import { MonitoredResource } from "./monitoredresource";


export enum TimeSeriesMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED",
    Gauge = "GAUGE",
    Delta = "DELTA",
    Cumulative = "CUMULATIVE"
}

export enum TimeSeriesValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Int64 = "INT64",
    Double = "DOUBLE",
    String = "STRING",
    Distribution = "DISTRIBUTION",
    Money = "MONEY"
}


// TimeSeries
/** 
 * A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
**/
export class TimeSeries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: MonitoredResourceMetadata;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: Metric;

  @SpeakeasyMetadata({ data: "json, name=metricKind" })
  metricKind?: TimeSeriesMetricKindEnum;

  @SpeakeasyMetadata({ data: "json, name=points", elemType: Point })
  points?: Point[];

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: MonitoredResource;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: TimeSeriesValueTypeEnum;
}
