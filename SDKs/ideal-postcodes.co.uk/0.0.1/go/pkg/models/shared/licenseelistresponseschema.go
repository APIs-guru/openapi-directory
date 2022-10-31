package shared



type LicenseeListResponseSchema struct {
    Code *int32 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    Result *LicenseeListResult `json:"result,omitempty"`
    
}

