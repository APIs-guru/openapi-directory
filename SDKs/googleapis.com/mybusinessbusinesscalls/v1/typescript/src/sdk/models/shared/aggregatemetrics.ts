import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Date } from "./date";
import { HourlyMetrics } from "./hourlymetrics";
import { Date } from "./date";
import { WeekDayMetrics } from "./weekdaymetrics";


// AggregateMetrics
/** 
 * Metrics aggregated over the input time range.
**/
export class AggregateMetrics extends SpeakeasyBase {
  @Metadata({ data: "json, name=answeredCallsCount" })
  answeredCallsCount?: number;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=hourlyMetrics", elemType: shared.HourlyMetrics })
  hourlyMetrics?: HourlyMetrics[];

  @Metadata({ data: "json, name=missedCallsCount" })
  missedCallsCount?: number;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=weekdayMetrics", elemType: shared.WeekDayMetrics })
  weekdayMetrics?: WeekDayMetrics[];
}
