import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregateMetrics } from "./aggregatemetrics";


export enum BusinessCallsInsightsMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    AggregateCount = "AGGREGATE_COUNT"
}


// BusinessCallsInsights
/** 
 * Insights for calls made to a location.
**/
export class BusinessCallsInsights extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregateMetrics" })
  aggregateMetrics?: AggregateMetrics;

  @SpeakeasyMetadata({ data: "json, name=metricType" })
  metricType?: BusinessCallsInsightsMetricTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
