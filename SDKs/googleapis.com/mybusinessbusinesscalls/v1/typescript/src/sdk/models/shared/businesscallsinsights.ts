import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregateMetrics } from "./aggregatemetrics";

export enum BusinessCallsInsightsMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED"
,    AggregateCount = "AGGREGATE_COUNT"
}


// BusinessCallsInsights
/** 
 * Insights for calls made to a location.
**/
export class BusinessCallsInsights extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregateMetrics" })
  aggregateMetrics?: AggregateMetrics;

  @Metadata({ data: "json, name=metricType" })
  metricType?: BusinessCallsInsightsMetricTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
