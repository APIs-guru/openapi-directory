package shared

type GooglePrivacyDlpV2ValueDayOfWeekValueEnum string

const (
	GooglePrivacyDlpV2ValueDayOfWeekValueEnumDayOfWeekUnspecified GooglePrivacyDlpV2ValueDayOfWeekValueEnum = "DAY_OF_WEEK_UNSPECIFIED"
	GooglePrivacyDlpV2ValueDayOfWeekValueEnumMonday               GooglePrivacyDlpV2ValueDayOfWeekValueEnum = "MONDAY"
	GooglePrivacyDlpV2ValueDayOfWeekValueEnumTuesday              GooglePrivacyDlpV2ValueDayOfWeekValueEnum = "TUESDAY"
	GooglePrivacyDlpV2ValueDayOfWeekValueEnumWednesday            GooglePrivacyDlpV2ValueDayOfWeekValueEnum = "WEDNESDAY"
	GooglePrivacyDlpV2ValueDayOfWeekValueEnumThursday             GooglePrivacyDlpV2ValueDayOfWeekValueEnum = "THURSDAY"
	GooglePrivacyDlpV2ValueDayOfWeekValueEnumFriday               GooglePrivacyDlpV2ValueDayOfWeekValueEnum = "FRIDAY"
	GooglePrivacyDlpV2ValueDayOfWeekValueEnumSaturday             GooglePrivacyDlpV2ValueDayOfWeekValueEnum = "SATURDAY"
	GooglePrivacyDlpV2ValueDayOfWeekValueEnumSunday               GooglePrivacyDlpV2ValueDayOfWeekValueEnum = "SUNDAY"
)

type GooglePrivacyDlpV2Value struct {
	BooleanValue   *bool                                      `json:"booleanValue"`
	DateValue      *GoogleTypeDate                            `json:"dateValue"`
	DayOfWeekValue *GooglePrivacyDlpV2ValueDayOfWeekValueEnum `json:"dayOfWeekValue"`
	FloatValue     *float64                                   `json:"floatValue"`
	IntegerValue   *string                                    `json:"integerValue"`
	StringValue    *string                                    `json:"stringValue"`
	TimeValue      *GoogleTypeTimeOfDay                       `json:"timeValue"`
	TimestampValue *string                                    `json:"timestampValue"`
}
