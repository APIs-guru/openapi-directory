package shared



type GoogleCloudDocumentaiV1beta2TableExtractionParams struct {
    Enabled *bool `json:"enabled,omitempty"`
    HeaderHints []string `json:"headerHints,omitempty"`
    ModelVersion *string `json:"modelVersion,omitempty"`
    TableBoundHints []GoogleCloudDocumentaiV1beta2TableBoundHint `json:"tableBoundHints,omitempty"`
    
}

