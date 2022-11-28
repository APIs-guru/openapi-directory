package shared

// GoogleCloudVisionV1p2beta1InputConfig
// The desired input location and metadata.
type GoogleCloudVisionV1p2beta1InputConfig struct {
	Content   *string                              `json:"content,omitempty"`
	GcsSource *GoogleCloudVisionV1p2beta1GcsSource `json:"gcsSource,omitempty"`
	MimeType  *string                              `json:"mimeType,omitempty"`
}
