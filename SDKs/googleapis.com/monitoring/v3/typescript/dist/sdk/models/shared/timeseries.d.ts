import { SpeakeasyBase } from "../../../internal/utils";
import { MonitoredResourceMetadata } from "./monitoredresourcemetadata";
import { Metric } from "./metric";
import { Point } from "./point";
import { MonitoredResource } from "./monitoredresource";
export declare enum TimeSeriesMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED",
    Gauge = "GAUGE",
    Delta = "DELTA",
    Cumulative = "CUMULATIVE"
}
export declare enum TimeSeriesValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Int64 = "INT64",
    Double = "DOUBLE",
    String = "STRING",
    Distribution = "DISTRIBUTION",
    Money = "MONEY"
}
/**
 * A collection of data points that describes the time-varying values of a metric. A time series is identified by a combination of a fully-specified monitored resource and a fully-specified metric. This type is used for both listing and creating time series.
**/
export declare class TimeSeries extends SpeakeasyBase {
    metadata?: MonitoredResourceMetadata;
    metric?: Metric;
    metricKind?: TimeSeriesMetricKindEnum;
    points?: Point[];
    resource?: MonitoredResource;
    unit?: string;
    valueType?: TimeSeriesValueTypeEnum;
}
