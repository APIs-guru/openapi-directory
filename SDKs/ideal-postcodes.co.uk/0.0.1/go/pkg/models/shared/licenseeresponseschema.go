package shared



type LicenseeResponseSchema struct {
    Code *int32 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    Result *Licensee `json:"result,omitempty"`
    
}

