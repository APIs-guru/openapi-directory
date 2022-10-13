package shared

type GooglePrivacyDlpV2KAnonymityConfig struct {
	EntityID *GooglePrivacyDlpV2EntityID `json:"entityId"`
	QuasiIds []GooglePrivacyDlpV2FieldID `json:"quasiIds"`
}
