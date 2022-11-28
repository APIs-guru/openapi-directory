import { SpeakeasyBase } from "../../../internal/utils";
import { TimeDimension } from "./timedimension";
export declare enum DimensionalMetricValueMetricOptionEnum {
    MetricOptionUnspecified = "METRIC_OPTION_UNSPECIFIED",
    AggregatedTotal = "AGGREGATED_TOTAL",
    AggregatedDaily = "AGGREGATED_DAILY",
    BreakdownDayOfWeek = "BREAKDOWN_DAY_OF_WEEK",
    BreakdownHourOfDay = "BREAKDOWN_HOUR_OF_DAY"
}
/**
 * A value for a single metric with a given time dimension.
**/
export declare class DimensionalMetricValue extends SpeakeasyBase {
    metricOption?: DimensionalMetricValueMetricOptionEnum;
    timeDimension?: TimeDimension;
    value?: string;
}
