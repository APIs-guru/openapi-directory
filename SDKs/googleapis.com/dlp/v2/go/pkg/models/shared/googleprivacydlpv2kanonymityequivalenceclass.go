package shared

// GooglePrivacyDlpV2KAnonymityEquivalenceClass
// The set of columns' values that share the same ldiversity value
type GooglePrivacyDlpV2KAnonymityEquivalenceClass struct {
	EquivalenceClassSize *string                   `json:"equivalenceClassSize,omitempty"`
	QuasiIdsValues       []GooglePrivacyDlpV2Value `json:"quasiIdsValues,omitempty"`
}
