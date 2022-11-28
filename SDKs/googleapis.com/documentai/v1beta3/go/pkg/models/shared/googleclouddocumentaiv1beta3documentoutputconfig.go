package shared

// GoogleCloudDocumentaiV1beta3DocumentOutputConfig
// Config that controls the output of documents. All documents will be written as a JSON file.
type GoogleCloudDocumentaiV1beta3DocumentOutputConfig struct {
	GcsOutputConfig *GoogleCloudDocumentaiV1beta3DocumentOutputConfigGcsOutputConfig `json:"gcsOutputConfig,omitempty"`
}
