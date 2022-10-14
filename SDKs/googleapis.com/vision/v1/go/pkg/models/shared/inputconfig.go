package shared

type InputConfig struct {
	Content   *string    `json:"content,omitempty"`
	GcsSource *GcsSource `json:"gcsSource,omitempty"`
	MimeType  *string    `json:"mimeType,omitempty"`
}
