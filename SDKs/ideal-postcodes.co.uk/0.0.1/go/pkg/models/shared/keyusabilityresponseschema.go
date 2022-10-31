package shared



type KeyUsabilityResponseSchema struct {
    Code *int32 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    Result *KeyUsabilityResult `json:"result,omitempty"`
    
}

