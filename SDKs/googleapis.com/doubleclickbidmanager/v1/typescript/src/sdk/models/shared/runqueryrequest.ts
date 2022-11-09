import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RunQueryRequestDataRangeEnum {
    CustomDates = "CUSTOM_DATES"
,    CurrentDay = "CURRENT_DAY"
,    PreviousDay = "PREVIOUS_DAY"
,    WeekToDate = "WEEK_TO_DATE"
,    MonthToDate = "MONTH_TO_DATE"
,    QuarterToDate = "QUARTER_TO_DATE"
,    YearToDate = "YEAR_TO_DATE"
,    PreviousWeek = "PREVIOUS_WEEK"
,    PreviousHalfMonth = "PREVIOUS_HALF_MONTH"
,    PreviousMonth = "PREVIOUS_MONTH"
,    PreviousQuarter = "PREVIOUS_QUARTER"
,    PreviousYear = "PREVIOUS_YEAR"
,    Last7Days = "LAST_7_DAYS"
,    Last30Days = "LAST_30_DAYS"
,    Last90Days = "LAST_90_DAYS"
,    Last365Days = "LAST_365_DAYS"
,    AllTime = "ALL_TIME"
,    Last14Days = "LAST_14_DAYS"
,    TypeNotSupported = "TYPE_NOT_SUPPORTED"
,    Last60Days = "LAST_60_DAYS"
}


// RunQueryRequest
/** 
 * Request to run a stored query to generate a report.
**/
export class RunQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataRange" })
  dataRange?: RunQueryRequestDataRangeEnum;

  @Metadata({ data: "json, name=reportDataEndTimeMs" })
  reportDataEndTimeMs?: string;

  @Metadata({ data: "json, name=reportDataStartTimeMs" })
  reportDataStartTimeMs?: string;

  @Metadata({ data: "json, name=timezoneCode" })
  timezoneCode?: string;
}
