package shared



type SignJwtRequest struct {
    Delegates []string `json:"delegates,omitempty"`
    Payload *string `json:"payload,omitempty"`
    
}

