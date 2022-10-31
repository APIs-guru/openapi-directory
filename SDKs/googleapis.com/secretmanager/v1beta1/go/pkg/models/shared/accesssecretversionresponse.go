package shared



type AccessSecretVersionResponse struct {
    Name *string `json:"name,omitempty"`
    Payload *SecretPayload `json:"payload,omitempty"`
    
}

