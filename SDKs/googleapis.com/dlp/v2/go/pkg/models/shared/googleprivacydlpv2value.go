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

// GooglePrivacyDlpV2Value
// Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
type GooglePrivacyDlpV2Value struct {
	BooleanValue   *bool                                      `json:"booleanValue,omitempty"`
	DateValue      *GoogleTypeDate                            `json:"dateValue,omitempty"`
	DayOfWeekValue *GooglePrivacyDlpV2ValueDayOfWeekValueEnum `json:"dayOfWeekValue,omitempty"`
	FloatValue     *float64                                   `json:"floatValue,omitempty"`
	IntegerValue   *string                                    `json:"integerValue,omitempty"`
	StringValue    *string                                    `json:"stringValue,omitempty"`
	TimeValue      *GoogleTypeTimeOfDay                       `json:"timeValue,omitempty"`
	TimestampValue *string                                    `json:"timestampValue,omitempty"`
}
