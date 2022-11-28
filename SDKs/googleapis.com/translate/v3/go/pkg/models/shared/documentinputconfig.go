package shared

// DocumentInputConfig
// A document translation request input config.
type DocumentInputConfig struct {
	Content   *string    `json:"content,omitempty"`
	GcsSource *GcsSource `json:"gcsSource,omitempty"`
	MimeType  *string    `json:"mimeType,omitempty"`
}
