import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
export declare enum DataRangeRangeEnum {
    RangeUnspecified = "RANGE_UNSPECIFIED",
    CustomDates = "CUSTOM_DATES",
    CurrentDay = "CURRENT_DAY",
    PreviousDay = "PREVIOUS_DAY",
    WeekToDate = "WEEK_TO_DATE",
    MonthToDate = "MONTH_TO_DATE",
    QuarterToDate = "QUARTER_TO_DATE",
    YearToDate = "YEAR_TO_DATE",
    PreviousWeek = "PREVIOUS_WEEK",
    PreviousMonth = "PREVIOUS_MONTH",
    PreviousQuarter = "PREVIOUS_QUARTER",
    PreviousYear = "PREVIOUS_YEAR",
    Last7Days = "LAST_7_DAYS",
    Last30Days = "LAST_30_DAYS",
    Last90Days = "LAST_90_DAYS",
    Last365Days = "LAST_365_DAYS",
    AllTime = "ALL_TIME",
    Last14Days = "LAST_14_DAYS",
    Last60Days = "LAST_60_DAYS"
}
/**
 * Report data range.
**/
export declare class DataRange extends SpeakeasyBase {
    customEndDate?: Date;
    customStartDate?: Date;
    range?: DataRangeRangeEnum;
}
