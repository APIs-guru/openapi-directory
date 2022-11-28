import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DateTimeRuleTypeEnum {
    DateTimeRuleTypeUnspecified = "DATE_TIME_RULE_TYPE_UNSPECIFIED",
    Second = "SECOND",
    Minute = "MINUTE",
    Hour = "HOUR",
    HourMinute = "HOUR_MINUTE",
    HourMinuteAmpm = "HOUR_MINUTE_AMPM",
    DayOfWeek = "DAY_OF_WEEK",
    DayOfYear = "DAY_OF_YEAR",
    DayOfMonth = "DAY_OF_MONTH",
    DayMonth = "DAY_MONTH",
    Month = "MONTH",
    Quarter = "QUARTER",
    Year = "YEAR",
    YearMonth = "YEAR_MONTH",
    YearQuarter = "YEAR_QUARTER",
    YearMonthDay = "YEAR_MONTH_DAY"
}
/**
 * Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+
**/
export declare class DateTimeRule extends SpeakeasyBase {
    type?: DateTimeRuleTypeEnum;
}
