package shared

// FileUploadAnswer
// Info for a single file submitted to a file upload question.
type FileUploadAnswer struct {
	FileID   *string `json:"fileId,omitempty"`
	FileName *string `json:"fileName,omitempty"`
	MimeType *string `json:"mimeType,omitempty"`
}
