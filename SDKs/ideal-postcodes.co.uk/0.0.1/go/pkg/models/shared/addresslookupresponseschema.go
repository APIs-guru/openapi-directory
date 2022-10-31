package shared



type AddressLookupResponseSchema struct {
    Code *int32 `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    Result *Address `json:"result,omitempty"`
    
}

