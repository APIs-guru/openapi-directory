import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { HourlyMetrics } from "./hourlymetrics";
import { WeekDayMetrics } from "./weekdaymetrics";
/**
 * Metrics aggregated over the input time range.
**/
export declare class AggregateMetrics extends SpeakeasyBase {
    answeredCallsCount?: number;
    endDate?: Date;
    hourlyMetrics?: HourlyMetrics[];
    missedCallsCount?: number;
    startDate?: Date;
    weekdayMetrics?: WeekDayMetrics[];
}
