package shared

// GooglePrivacyDlpV2LDiversityConfig
// l-diversity metric, used for analysis of reidentification risk.
type GooglePrivacyDlpV2LDiversityConfig struct {
	QuasiIds           []GooglePrivacyDlpV2FieldID `json:"quasiIds,omitempty"`
	SensitiveAttribute *GooglePrivacyDlpV2FieldID  `json:"sensitiveAttribute,omitempty"`
}
