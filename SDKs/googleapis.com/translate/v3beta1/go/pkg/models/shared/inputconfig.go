package shared

type InputConfig struct {
	GcsSource *GcsSource `json:"gcsSource"`
	MimeType  *string    `json:"mimeType"`
}
