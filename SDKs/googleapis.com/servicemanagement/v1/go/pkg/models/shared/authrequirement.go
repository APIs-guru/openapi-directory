package shared



type AuthRequirement struct {
    Audiences *string `json:"audiences,omitempty"`
    ProviderID *string `json:"providerId,omitempty"`
    
}

