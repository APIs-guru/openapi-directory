import { SpeakeasyBase } from "../../../internal/utils";
import { AggregateMetrics } from "./aggregatemetrics";
export declare enum BusinessCallsInsightsMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    AggregateCount = "AGGREGATE_COUNT"
}
/**
 * Insights for calls made to a location.
**/
export declare class BusinessCallsInsights extends SpeakeasyBase {
    aggregateMetrics?: AggregateMetrics;
    metricType?: BusinessCallsInsightsMetricTypeEnum;
    name?: string;
}
