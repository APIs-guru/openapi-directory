package shared



type GenerateAccessTokenRequest struct {
    Delegates []string `json:"delegates,omitempty"`
    Lifetime *string `json:"lifetime,omitempty"`
    Scope []string `json:"scope,omitempty"`
    
}

