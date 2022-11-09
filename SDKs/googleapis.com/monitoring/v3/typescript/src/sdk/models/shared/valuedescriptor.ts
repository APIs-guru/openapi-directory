import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ValueDescriptorMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED"
,    Gauge = "GAUGE"
,    Delta = "DELTA"
,    Cumulative = "CUMULATIVE"
}

export enum ValueDescriptorValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED"
,    Bool = "BOOL"
,    Int64 = "INT64"
,    Double = "DOUBLE"
,    String = "STRING"
,    Distribution = "DISTRIBUTION"
,    Money = "MONEY"
}


// ValueDescriptor
/** 
 * A descriptor for the value columns in a data point.
**/
export class ValueDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=metricKind" })
  metricKind?: ValueDescriptorMetricKindEnum;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=valueType" })
  valueType?: ValueDescriptorValueTypeEnum;
}
