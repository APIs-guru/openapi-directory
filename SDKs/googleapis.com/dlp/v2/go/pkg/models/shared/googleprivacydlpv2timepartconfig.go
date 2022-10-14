package shared

type GooglePrivacyDlpV2TimePartConfigPartToExtractEnum string

const (
	GooglePrivacyDlpV2TimePartConfigPartToExtractEnumTimePartUnspecified GooglePrivacyDlpV2TimePartConfigPartToExtractEnum = "TIME_PART_UNSPECIFIED"
	GooglePrivacyDlpV2TimePartConfigPartToExtractEnumYear                GooglePrivacyDlpV2TimePartConfigPartToExtractEnum = "YEAR"
	GooglePrivacyDlpV2TimePartConfigPartToExtractEnumMonth               GooglePrivacyDlpV2TimePartConfigPartToExtractEnum = "MONTH"
	GooglePrivacyDlpV2TimePartConfigPartToExtractEnumDayOfMonth          GooglePrivacyDlpV2TimePartConfigPartToExtractEnum = "DAY_OF_MONTH"
	GooglePrivacyDlpV2TimePartConfigPartToExtractEnumDayOfWeek           GooglePrivacyDlpV2TimePartConfigPartToExtractEnum = "DAY_OF_WEEK"
	GooglePrivacyDlpV2TimePartConfigPartToExtractEnumWeekOfYear          GooglePrivacyDlpV2TimePartConfigPartToExtractEnum = "WEEK_OF_YEAR"
	GooglePrivacyDlpV2TimePartConfigPartToExtractEnumHourOfDay           GooglePrivacyDlpV2TimePartConfigPartToExtractEnum = "HOUR_OF_DAY"
)

type GooglePrivacyDlpV2TimePartConfig struct {
	PartToExtract *GooglePrivacyDlpV2TimePartConfigPartToExtractEnum `json:"partToExtract,omitempty"`
}
