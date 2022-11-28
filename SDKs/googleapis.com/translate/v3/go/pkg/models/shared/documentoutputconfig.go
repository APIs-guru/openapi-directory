package shared

// DocumentOutputConfig
// A document translation request output config.
type DocumentOutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
	MimeType       *string         `json:"mimeType,omitempty"`
}
