package shared

type GooglePrivacyDlpV2DateShiftConfig struct {
	Context        *GooglePrivacyDlpV2FieldID   `json:"context"`
	CryptoKey      *GooglePrivacyDlpV2CryptoKey `json:"cryptoKey"`
	LowerBoundDays *int32                       `json:"lowerBoundDays"`
	UpperBoundDays *int32                       `json:"upperBoundDays"`
}
