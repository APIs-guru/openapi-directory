package shared

// GooglePrivacyDlpV2TransformationOverview
// Overview of the modifications that occurred.
type GooglePrivacyDlpV2TransformationOverview struct {
	TransformationSummaries []GooglePrivacyDlpV2TransformationSummary `json:"transformationSummaries,omitempty"`
	TransformedBytes        *string                                   `json:"transformedBytes,omitempty"`
}
