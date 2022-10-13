package shared

type DocumentOutputConfig struct {
	GcsDestination *GcsDestination `json:"gcsDestination"`
	MimeType       *string         `json:"mimeType"`
}
