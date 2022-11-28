package shared

// GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig
// The message for input config in batch process.
type GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig struct {
	GcsSource *string `json:"gcsSource,omitempty"`
	MimeType  *string `json:"mimeType,omitempty"`
}
