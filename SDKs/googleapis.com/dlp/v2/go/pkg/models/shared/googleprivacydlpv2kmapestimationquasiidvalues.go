package shared

// GooglePrivacyDlpV2KMapEstimationQuasiIDValues
// A tuple of values for the quasi-identifier columns.
type GooglePrivacyDlpV2KMapEstimationQuasiIDValues struct {
	EstimatedAnonymity *string                   `json:"estimatedAnonymity,omitempty"`
	QuasiIdsValues     []GooglePrivacyDlpV2Value `json:"quasiIdsValues,omitempty"`
}
