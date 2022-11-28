import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";
import { MetricDescriptorMetadata } from "./metricdescriptormetadata";


export enum MetricDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}

export enum MetricDescriptorMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED",
    Gauge = "GAUGE",
    Delta = "DELTA",
    Cumulative = "CUMULATIVE"
}

export enum MetricDescriptorValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Int64 = "INT64",
    Double = "DOUBLE",
    String = "STRING",
    Distribution = "DISTRIBUTION",
    Money = "MONEY"
}


// MetricDescriptor
/** 
 * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
**/
export class MetricDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: LabelDescriptor })
  labels?: LabelDescriptor[];

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: MetricDescriptorLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: MetricDescriptorMetadata;

  @SpeakeasyMetadata({ data: "json, name=metricKind" })
  metricKind?: MetricDescriptorMetricKindEnum;

  @SpeakeasyMetadata({ data: "json, name=monitoredResourceTypes" })
  monitoredResourceTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: MetricDescriptorValueTypeEnum;
}
