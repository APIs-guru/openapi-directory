package shared

// GooglePrivacyDlpV2KMapEstimationResult
// Result of the reidentifiability analysis. Note that these results are an estimation, not exact values.
type GooglePrivacyDlpV2KMapEstimationResult struct {
	KMapEstimationHistogram []GooglePrivacyDlpV2KMapEstimationHistogramBucket `json:"kMapEstimationHistogram,omitempty"`
}
