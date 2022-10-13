package shared

type FileUploadAnswer struct {
	FileID   *string `json:"fileId"`
	FileName *string `json:"fileName"`
	MimeType *string `json:"mimeType"`
}
