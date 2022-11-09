import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ChartDateTimeRuleTypeEnum {
    ChartDateTimeRuleTypeUnspecified = "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED"
,    Second = "SECOND"
,    Minute = "MINUTE"
,    Hour = "HOUR"
,    HourMinute = "HOUR_MINUTE"
,    HourMinuteAmpm = "HOUR_MINUTE_AMPM"
,    DayOfWeek = "DAY_OF_WEEK"
,    DayOfYear = "DAY_OF_YEAR"
,    DayOfMonth = "DAY_OF_MONTH"
,    DayMonth = "DAY_MONTH"
,    Month = "MONTH"
,    Quarter = "QUARTER"
,    Year = "YEAR"
,    YearMonth = "YEAR_MONTH"
,    YearQuarter = "YEAR_QUARTER"
,    YearMonthDay = "YEAR_MONTH_DAY"
}


// ChartDateTimeRule
/** 
 * Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.
**/
export class ChartDateTimeRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: ChartDateTimeRuleTypeEnum;
}
