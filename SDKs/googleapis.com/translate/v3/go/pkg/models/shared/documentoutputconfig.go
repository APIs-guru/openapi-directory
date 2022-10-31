package shared

type DocumentOutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination,omitempty"`
	MimeType       *string         `json:"mimeType,omitempty"`
}
