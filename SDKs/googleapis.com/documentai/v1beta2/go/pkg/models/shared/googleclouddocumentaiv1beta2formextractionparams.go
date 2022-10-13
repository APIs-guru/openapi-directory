package shared

type GoogleCloudDocumentaiV1beta2FormExtractionParams struct {
	Enabled           *bool                                          `json:"enabled"`
	KeyValuePairHints []GoogleCloudDocumentaiV1beta2KeyValuePairHint `json:"keyValuePairHints"`
	ModelVersion      *string                                        `json:"modelVersion"`
}
