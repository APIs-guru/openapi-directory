package shared

type GoogleCloudDocumentaiV1beta2TableExtractionParams struct {
	Enabled         *bool                                        `json:"enabled"`
	HeaderHints     []string                                     `json:"headerHints"`
	ModelVersion    *string                                      `json:"modelVersion"`
	TableBoundHints []GoogleCloudDocumentaiV1beta2TableBoundHint `json:"tableBoundHints"`
}
