import { SpeakeasyBase } from "../../../internal/utils/utils";
import { LabelDescriptor } from "./labeldescriptor";
import { MetricDescriptorMetadata } from "./metricdescriptormetadata";
export declare enum MetricDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
export declare enum MetricDescriptorMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED",
    Gauge = "GAUGE",
    Delta = "DELTA",
    Cumulative = "CUMULATIVE"
}
export declare enum MetricDescriptorValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Int64 = "INT64",
    Double = "DOUBLE",
    String = "STRING",
    Distribution = "DISTRIBUTION",
    Money = "MONEY"
}
/**
 * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
**/
export declare class MetricDescriptor extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    labels?: LabelDescriptor[];
    launchStage?: MetricDescriptorLaunchStageEnum;
    metadata?: MetricDescriptorMetadata;
    metricKind?: MetricDescriptorMetricKindEnum;
    monitoredResourceTypes?: string[];
    name?: string;
    type?: string;
    unit?: string;
    valueType?: MetricDescriptorValueTypeEnum;
}
