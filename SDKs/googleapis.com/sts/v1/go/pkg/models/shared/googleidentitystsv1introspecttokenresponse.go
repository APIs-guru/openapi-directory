package shared



type GoogleIdentityStsV1IntrospectTokenResponse struct {
    Active *bool `json:"active,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    Exp *string `json:"exp,omitempty"`
    Iat *string `json:"iat,omitempty"`
    Iss *string `json:"iss,omitempty"`
    Scope *string `json:"scope,omitempty"`
    Sub *string `json:"sub,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

