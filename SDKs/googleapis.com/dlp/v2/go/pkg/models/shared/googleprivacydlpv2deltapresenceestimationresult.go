package shared

// GooglePrivacyDlpV2DeltaPresenceEstimationResult
// Result of the δ-presence computation. Note that these results are an estimation, not exact values.
type GooglePrivacyDlpV2DeltaPresenceEstimationResult struct {
	DeltaPresenceEstimationHistogram []GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket `json:"deltaPresenceEstimationHistogram,omitempty"`
}
