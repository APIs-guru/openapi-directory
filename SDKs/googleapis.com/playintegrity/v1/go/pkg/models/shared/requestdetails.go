package shared



type RequestDetails struct {
    Nonce *string `json:"nonce,omitempty"`
    RequestPackageName *string `json:"requestPackageName,omitempty"`
    TimestampMillis *string `json:"timestampMillis,omitempty"`
    
}

