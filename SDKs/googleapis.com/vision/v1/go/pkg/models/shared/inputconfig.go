package shared

type InputConfig struct {
	Content   *string    `json:"content"`
	GcsSource *GcsSource `json:"gcsSource"`
	MimeType  *string    `json:"mimeType"`
}
