import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DateRangeRelativeDateRangeEnum {
    Today = "TODAY"
,    Yesterday = "YESTERDAY"
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
,    Last24Months = "LAST_24_MONTHS"
,    Last14Days = "LAST_14_DAYS"
,    Last60Days = "LAST_60_DAYS"
}


// DateRange
/** 
 * Represents a date range.
**/
export class DateRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=relativeDateRange" })
  relativeDateRange?: DateRangeRelativeDateRangeEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;
}
