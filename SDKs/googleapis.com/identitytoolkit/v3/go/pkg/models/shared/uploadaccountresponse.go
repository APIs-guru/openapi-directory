package shared



type UploadAccountResponseError struct {
    Index *int32 `json:"index,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type UploadAccountResponse struct {
    Error []UploadAccountResponseError `json:"error,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

