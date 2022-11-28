import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { HourlyMetrics } from "./hourlymetrics";
import { WeekDayMetrics } from "./weekdaymetrics";



// AggregateMetrics
/** 
 * Metrics aggregated over the input time range.
**/
export class AggregateMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answeredCallsCount" })
  answeredCallsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=hourlyMetrics", elemType: HourlyMetrics })
  hourlyMetrics?: HourlyMetrics[];

  @SpeakeasyMetadata({ data: "json, name=missedCallsCount" })
  missedCallsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=weekdayMetrics", elemType: WeekDayMetrics })
  weekdayMetrics?: WeekDayMetrics[];
}
