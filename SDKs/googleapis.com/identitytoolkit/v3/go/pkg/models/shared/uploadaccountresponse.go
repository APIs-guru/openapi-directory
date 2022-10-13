package shared

type UploadAccountResponseError struct {
	Index   *int32  `json:"index"`
	Message *string `json:"message"`
}

type UploadAccountResponse struct {
	Error []UploadAccountResponseError `json:"error"`
	Kind  *string                      `json:"kind"`
}
