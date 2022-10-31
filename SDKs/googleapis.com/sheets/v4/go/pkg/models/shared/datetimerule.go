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

type DateTimeRule struct {
	Type *DateTimeRuleTypeEnum `json:"type,omitempty"`
}
