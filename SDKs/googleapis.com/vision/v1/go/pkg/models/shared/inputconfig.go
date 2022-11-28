package shared

// InputConfig
// The desired input location and metadata.
type InputConfig struct {
	Content   *string    `json:"content,omitempty"`
	GcsSource *GcsSource `json:"gcsSource,omitempty"`
	MimeType  *string    `json:"mimeType,omitempty"`
}
