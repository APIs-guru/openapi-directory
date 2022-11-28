package shared

// InputConfig
// Input configuration for BatchTranslateText request.
type InputConfig struct {
	GcsSource *GcsSource `json:"gcsSource,omitempty"`
	MimeType  *string    `json:"mimeType,omitempty"`
}
