package shared

type GooglePrivacyDlpV2TransformationOverview struct {
	TransformationSummaries []GooglePrivacyDlpV2TransformationSummary `json:"transformationSummaries,omitempty"`
	TransformedBytes        *string                                   `json:"transformedBytes,omitempty"`
}
