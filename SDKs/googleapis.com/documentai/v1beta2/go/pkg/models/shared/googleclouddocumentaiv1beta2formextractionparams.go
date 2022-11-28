package shared

// GoogleCloudDocumentaiV1beta2FormExtractionParams
// Parameters to control form extraction behavior.
type GoogleCloudDocumentaiV1beta2FormExtractionParams struct {
	Enabled           *bool                                          `json:"enabled,omitempty"`
	KeyValuePairHints []GoogleCloudDocumentaiV1beta2KeyValuePairHint `json:"keyValuePairHints,omitempty"`
	ModelVersion      *string                                        `json:"modelVersion,omitempty"`
}
