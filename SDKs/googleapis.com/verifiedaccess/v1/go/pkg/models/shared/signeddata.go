package shared



type SignedData struct {
    Data *string `json:"data,omitempty"`
    Signature *string `json:"signature,omitempty"`
    
}

