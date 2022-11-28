import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ValueDescriptorMetricKindEnum {
    MetricKindUnspecified = "METRIC_KIND_UNSPECIFIED",
    Gauge = "GAUGE",
    Delta = "DELTA",
    Cumulative = "CUMULATIVE"
}

export enum ValueDescriptorValueTypeEnum {
    ValueTypeUnspecified = "VALUE_TYPE_UNSPECIFIED",
    Bool = "BOOL",
    Int64 = "INT64",
    Double = "DOUBLE",
    String = "STRING",
    Distribution = "DISTRIBUTION",
    Money = "MONEY"
}


// ValueDescriptor
/** 
 * A descriptor for the value columns in a data point.
**/
export class ValueDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=metricKind" })
  metricKind?: ValueDescriptorMetricKindEnum;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=valueType" })
  valueType?: ValueDescriptorValueTypeEnum;
}
