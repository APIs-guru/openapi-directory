package shared

// GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues
// A tuple of values for the quasi-identifier columns.
type GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIDValues struct {
	EstimatedProbability *float64                  `json:"estimatedProbability,omitempty"`
	QuasiIdsValues       []GooglePrivacyDlpV2Value `json:"quasiIdsValues,omitempty"`
}
