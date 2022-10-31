package shared



type KeyUsageResponseSchema struct {
    Code *int32 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    Result *KeyUsageResult `json:"result,omitempty"`
    
}

