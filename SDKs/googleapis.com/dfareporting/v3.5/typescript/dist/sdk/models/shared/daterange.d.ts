import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DateRangeRelativeDateRangeEnum {
    Today = "TODAY",
    Yesterday = "YESTERDAY",
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
    Last24Months = "LAST_24_MONTHS",
    Last14Days = "LAST_14_DAYS",
    Last60Days = "LAST_60_DAYS"
}
/**
 * Represents a date range.
**/
export declare class DateRange extends SpeakeasyBase {
    endDate?: Date;
    kind?: string;
    relativeDateRange?: DateRangeRelativeDateRangeEnum;
    startDate?: Date;
}
