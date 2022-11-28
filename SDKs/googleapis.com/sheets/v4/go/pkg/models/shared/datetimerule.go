package shared

type DateTimeRuleTypeEnum string

const (
	DateTimeRuleTypeEnumDateTimeRuleTypeUnspecified DateTimeRuleTypeEnum = "DATE_TIME_RULE_TYPE_UNSPECIFIED"
	DateTimeRuleTypeEnumSecond                      DateTimeRuleTypeEnum = "SECOND"
	DateTimeRuleTypeEnumMinute                      DateTimeRuleTypeEnum = "MINUTE"
	DateTimeRuleTypeEnumHour                        DateTimeRuleTypeEnum = "HOUR"
	DateTimeRuleTypeEnumHourMinute                  DateTimeRuleTypeEnum = "HOUR_MINUTE"
	DateTimeRuleTypeEnumHourMinuteAmpm              DateTimeRuleTypeEnum = "HOUR_MINUTE_AMPM"
	DateTimeRuleTypeEnumDayOfWeek                   DateTimeRuleTypeEnum = "DAY_OF_WEEK"
	DateTimeRuleTypeEnumDayOfYear                   DateTimeRuleTypeEnum = "DAY_OF_YEAR"
	DateTimeRuleTypeEnumDayOfMonth                  DateTimeRuleTypeEnum = "DAY_OF_MONTH"
	DateTimeRuleTypeEnumDayMonth                    DateTimeRuleTypeEnum = "DAY_MONTH"
	DateTimeRuleTypeEnumMonth                       DateTimeRuleTypeEnum = "MONTH"
	DateTimeRuleTypeEnumQuarter                     DateTimeRuleTypeEnum = "QUARTER"
	DateTimeRuleTypeEnumYear                        DateTimeRuleTypeEnum = "YEAR"
	DateTimeRuleTypeEnumYearMonth                   DateTimeRuleTypeEnum = "YEAR_MONTH"
	DateTimeRuleTypeEnumYearQuarter                 DateTimeRuleTypeEnum = "YEAR_QUARTER"
	DateTimeRuleTypeEnumYearMonthDay                DateTimeRuleTypeEnum = "YEAR_MONTH_DAY"
)

// DateTimeRule
// Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values. For example, consider a pivot table showing sales transactions by date: +----------+--------------+ | Date | SUM of Sales | +----------+--------------+ | 1/1/2017 | $621.14 | | 2/3/2017 | $708.84 | | 5/8/2017 | $326.84 | ... +----------+--------------+ Applying a date-time group rule with a DateTimeRuleType of YEAR_MONTH results in the following pivot table. +--------------+--------------+ | Grouped Date | SUM of Sales | +--------------+--------------+ | 2017-Jan | $53,731.78 | | 2017-Feb | $83,475.32 | | 2017-Mar | $94,385.05 | ... +--------------+--------------+
type DateTimeRule struct {
	Type *DateTimeRuleTypeEnum `json:"type,omitempty"`
}
