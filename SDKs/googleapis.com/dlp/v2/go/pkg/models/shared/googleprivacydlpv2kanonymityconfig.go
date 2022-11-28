package shared

// GooglePrivacyDlpV2KAnonymityConfig
// k-anonymity metric, used for analysis of reidentification risk.
type GooglePrivacyDlpV2KAnonymityConfig struct {
	EntityID *GooglePrivacyDlpV2EntityID `json:"entityId,omitempty"`
	QuasiIds []GooglePrivacyDlpV2FieldID `json:"quasiIds,omitempty"`
}
