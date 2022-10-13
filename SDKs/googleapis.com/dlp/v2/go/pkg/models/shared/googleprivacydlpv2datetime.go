package shared

type GooglePrivacyDlpV2DateTimeDayOfWeekEnum string

const (
	GooglePrivacyDlpV2DateTimeDayOfWeekEnumDayOfWeekUnspecified GooglePrivacyDlpV2DateTimeDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
	GooglePrivacyDlpV2DateTimeDayOfWeekEnumMonday               GooglePrivacyDlpV2DateTimeDayOfWeekEnum = "MONDAY"
	GooglePrivacyDlpV2DateTimeDayOfWeekEnumTuesday              GooglePrivacyDlpV2DateTimeDayOfWeekEnum = "TUESDAY"
	GooglePrivacyDlpV2DateTimeDayOfWeekEnumWednesday            GooglePrivacyDlpV2DateTimeDayOfWeekEnum = "WEDNESDAY"
	GooglePrivacyDlpV2DateTimeDayOfWeekEnumThursday             GooglePrivacyDlpV2DateTimeDayOfWeekEnum = "THURSDAY"
	GooglePrivacyDlpV2DateTimeDayOfWeekEnumFriday               GooglePrivacyDlpV2DateTimeDayOfWeekEnum = "FRIDAY"
	GooglePrivacyDlpV2DateTimeDayOfWeekEnumSaturday             GooglePrivacyDlpV2DateTimeDayOfWeekEnum = "SATURDAY"
	GooglePrivacyDlpV2DateTimeDayOfWeekEnumSunday               GooglePrivacyDlpV2DateTimeDayOfWeekEnum = "SUNDAY"
)

type GooglePrivacyDlpV2DateTime struct {
	Date      *GoogleTypeDate                          `json:"date"`
	DayOfWeek *GooglePrivacyDlpV2DateTimeDayOfWeekEnum `json:"dayOfWeek"`
	Time      *GoogleTypeTimeOfDay                     `json:"time"`
	TimeZone  *GooglePrivacyDlpV2TimeZone              `json:"timeZone"`
}
