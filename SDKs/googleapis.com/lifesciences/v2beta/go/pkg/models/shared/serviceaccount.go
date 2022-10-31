package shared



type ServiceAccount struct {
    Email *string `json:"email,omitempty"`
    Scopes []string `json:"scopes,omitempty"`
    
}

