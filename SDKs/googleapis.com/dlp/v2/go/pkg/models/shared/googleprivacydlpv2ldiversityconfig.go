package shared

type GooglePrivacyDlpV2LDiversityConfig struct {
	QuasiIds           []GooglePrivacyDlpV2FieldID `json:"quasiIds"`
	SensitiveAttribute *GooglePrivacyDlpV2FieldID  `json:"sensitiveAttribute"`
}
