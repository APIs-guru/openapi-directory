import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelDescriptor } from "./labeldescriptor";
import { MetricDescriptorMetadata } from "./metricdescriptormetadata";

export enum MetricDescriptorLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}

export enum MetricDescriptorMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED"
,    Gauge = "GAUGE"
,    Delta = "DELTA"
,    Cumulative = "CUMULATIVE"
}

export enum MetricDescriptorValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED"
,    Bool = "BOOL"
,    Int64 = "INT64"
,    Double = "DOUBLE"
,    String = "STRING"
,    Distribution = "DISTRIBUTION"
,    Money = "MONEY"
}


// MetricDescriptor
/** 
 * Defines a metric type and its schema. Once a metric descriptor is created, deleting or altering it stops data collection and makes the metric type's existing data unusable.
**/
export class MetricDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.LabelDescriptor })
  labels?: LabelDescriptor[];

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: MetricDescriptorLaunchStageEnum;

  @Metadata({ data: "json, name=metadata" })
  metadata?: MetricDescriptorMetadata;

  @Metadata({ data: "json, name=metricKind" })
  metricKind?: MetricDescriptorMetricKindEnum;

  @Metadata({ data: "json, name=monitoredResourceTypes" })
  monitoredResourceTypes?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=valueType" })
  valueType?: MetricDescriptorValueTypeEnum;
}
