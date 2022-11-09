import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { Date } from "./date";

export enum DataRangeRangeEnum {
    RangeUnspecified = "RANGE_UNSPECIFIED"
,    CustomDates = "CUSTOM_DATES"
,    CurrentDay = "CURRENT_DAY"
,    PreviousDay = "PREVIOUS_DAY"
,    WeekToDate = "WEEK_TO_DATE"
,    MonthToDate = "MONTH_TO_DATE"
,    QuarterToDate = "QUARTER_TO_DATE"
,    YearToDate = "YEAR_TO_DATE"
,    PreviousWeek = "PREVIOUS_WEEK"
,    PreviousMonth = "PREVIOUS_MONTH"
,    PreviousQuarter = "PREVIOUS_QUARTER"
,    PreviousYear = "PREVIOUS_YEAR"
,    Last7Days = "LAST_7_DAYS"
,    Last30Days = "LAST_30_DAYS"
,    Last90Days = "LAST_90_DAYS"
,    Last365Days = "LAST_365_DAYS"
,    AllTime = "ALL_TIME"
,    Last14Days = "LAST_14_DAYS"
,    Last60Days = "LAST_60_DAYS"
}


// DataRange
/** 
 * Report data range.
**/
export class DataRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=customEndDate" })
  customEndDate?: Date;

  @Metadata({ data: "json, name=customStartDate" })
  customStartDate?: Date;

  @Metadata({ data: "json, name=range" })
  range?: DataRangeRangeEnum;
}
