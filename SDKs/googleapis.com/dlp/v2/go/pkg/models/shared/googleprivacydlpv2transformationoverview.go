package shared

type GooglePrivacyDlpV2TransformationOverview struct {
	TransformationSummaries []GooglePrivacyDlpV2TransformationSummary `json:"transformationSummaries"`
	TransformedBytes        *string                                   `json:"transformedBytes"`
}
