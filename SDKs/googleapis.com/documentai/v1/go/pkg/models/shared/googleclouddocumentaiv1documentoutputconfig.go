package shared

// GoogleCloudDocumentaiV1DocumentOutputConfig
// Config that controls the output of documents. All documents will be written as a JSON file.
type GoogleCloudDocumentaiV1DocumentOutputConfig struct {
	GcsOutputConfig *GoogleCloudDocumentaiV1DocumentOutputConfigGcsOutputConfig `json:"gcsOutputConfig,omitempty"`
}
