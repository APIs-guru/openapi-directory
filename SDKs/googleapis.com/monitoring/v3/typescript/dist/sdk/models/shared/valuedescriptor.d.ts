import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ValueDescriptorMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED",
    Gauge = "GAUGE",
    Delta = "DELTA",
    Cumulative = "CUMULATIVE"
}
export declare enum ValueDescriptorValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Int64 = "INT64",
    Double = "DOUBLE",
    String = "STRING",
    Distribution = "DISTRIBUTION",
    Money = "MONEY"
}
/**
 * A descriptor for the value columns in a data point.
**/
export declare class ValueDescriptor extends SpeakeasyBase {
    key?: string;
    metricKind?: ValueDescriptorMetricKindEnum;
    unit?: string;
    valueType?: ValueDescriptorValueTypeEnum;
}
