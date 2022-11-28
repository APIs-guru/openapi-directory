package shared

// GooglePrivacyDlpV2DateShiftConfig
// Shifts dates by random number of days, with option to be consistent for the same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting to learn more.
type GooglePrivacyDlpV2DateShiftConfig struct {
	Context        *GooglePrivacyDlpV2FieldID   `json:"context,omitempty"`
	CryptoKey      *GooglePrivacyDlpV2CryptoKey `json:"cryptoKey,omitempty"`
	LowerBoundDays *int32                       `json:"lowerBoundDays,omitempty"`
	UpperBoundDays *int32                       `json:"upperBoundDays,omitempty"`
}
