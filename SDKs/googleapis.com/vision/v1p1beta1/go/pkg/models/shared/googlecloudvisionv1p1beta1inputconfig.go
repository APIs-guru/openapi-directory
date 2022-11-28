package shared

// GoogleCloudVisionV1p1beta1InputConfig
// The desired input location and metadata.
type GoogleCloudVisionV1p1beta1InputConfig struct {
	Content   *string                              `json:"content,omitempty"`
	GcsSource *GoogleCloudVisionV1p1beta1GcsSource `json:"gcsSource,omitempty"`
	MimeType  *string                              `json:"mimeType,omitempty"`
}
