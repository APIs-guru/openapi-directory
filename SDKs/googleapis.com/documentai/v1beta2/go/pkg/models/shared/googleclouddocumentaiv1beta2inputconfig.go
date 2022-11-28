package shared

// GoogleCloudDocumentaiV1beta2InputConfig
// The desired input location and metadata.
type GoogleCloudDocumentaiV1beta2InputConfig struct {
	Contents  *string                                `json:"contents,omitempty"`
	GcsSource *GoogleCloudDocumentaiV1beta2GcsSource `json:"gcsSource,omitempty"`
	MimeType  *string                                `json:"mimeType,omitempty"`
}
