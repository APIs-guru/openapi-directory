package shared



type FileUploadAnswer struct {
    FileID *string `json:"fileId,omitempty"`
    FileName *string `json:"fileName,omitempty"`
    MimeType *string `json:"mimeType,omitempty"`
    
}

