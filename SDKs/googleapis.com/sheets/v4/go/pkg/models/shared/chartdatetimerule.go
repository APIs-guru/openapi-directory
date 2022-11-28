package shared

type ChartDateTimeRuleTypeEnum string

const (
	ChartDateTimeRuleTypeEnumChartDateTimeRuleTypeUnspecified ChartDateTimeRuleTypeEnum = "CHART_DATE_TIME_RULE_TYPE_UNSPECIFIED"
	ChartDateTimeRuleTypeEnumSecond                           ChartDateTimeRuleTypeEnum = "SECOND"
	ChartDateTimeRuleTypeEnumMinute                           ChartDateTimeRuleTypeEnum = "MINUTE"
	ChartDateTimeRuleTypeEnumHour                             ChartDateTimeRuleTypeEnum = "HOUR"
	ChartDateTimeRuleTypeEnumHourMinute                       ChartDateTimeRuleTypeEnum = "HOUR_MINUTE"
	ChartDateTimeRuleTypeEnumHourMinuteAmpm                   ChartDateTimeRuleTypeEnum = "HOUR_MINUTE_AMPM"
	ChartDateTimeRuleTypeEnumDayOfWeek                        ChartDateTimeRuleTypeEnum = "DAY_OF_WEEK"
	ChartDateTimeRuleTypeEnumDayOfYear                        ChartDateTimeRuleTypeEnum = "DAY_OF_YEAR"
	ChartDateTimeRuleTypeEnumDayOfMonth                       ChartDateTimeRuleTypeEnum = "DAY_OF_MONTH"
	ChartDateTimeRuleTypeEnumDayMonth                         ChartDateTimeRuleTypeEnum = "DAY_MONTH"
	ChartDateTimeRuleTypeEnumMonth                            ChartDateTimeRuleTypeEnum = "MONTH"
	ChartDateTimeRuleTypeEnumQuarter                          ChartDateTimeRuleTypeEnum = "QUARTER"
	ChartDateTimeRuleTypeEnumYear                             ChartDateTimeRuleTypeEnum = "YEAR"
	ChartDateTimeRuleTypeEnumYearMonth                        ChartDateTimeRuleTypeEnum = "YEAR_MONTH"
	ChartDateTimeRuleTypeEnumYearQuarter                      ChartDateTimeRuleTypeEnum = "YEAR_QUARTER"
	ChartDateTimeRuleTypeEnumYearMonthDay                     ChartDateTimeRuleTypeEnum = "YEAR_MONTH_DAY"
)

// ChartDateTimeRule
// Allows you to organize the date-time values in a source data column into buckets based on selected parts of their date or time values.
type ChartDateTimeRule struct {
	Type *ChartDateTimeRuleTypeEnum `json:"type,omitempty"`
}
