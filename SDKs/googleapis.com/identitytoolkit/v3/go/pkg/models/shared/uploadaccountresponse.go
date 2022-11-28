package shared

type UploadAccountResponseError struct {
	Index   *int32  `json:"index,omitempty"`
	Message *string `json:"message,omitempty"`
}

// UploadAccountResponse
// Respone of uploading accounts in batch.
type UploadAccountResponse struct {
	Error []UploadAccountResponseError `json:"error,omitempty"`
	Kind  *string                      `json:"kind,omitempty"`
}
