package shared



type APIKeyOut struct {
    Admin *bool `json:"admin,omitempty"`
    Anonymized *bool `json:"anonymized,omitempty"`
    APIKey *string `json:"apiKey,omitempty"`
    Corporate *bool `json:"corporate,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    Learnable *bool `json:"learnable,omitempty"`
    Partner *bool `json:"partner,omitempty"`
    Striped *bool `json:"striped,omitempty"`
    UserID *string `json:"userId,omitempty"`
    Vetted *bool `json:"vetted,omitempty"`
    
}

