package shared



type GenerateIDTokenRequest struct {
    Audience *string `json:"audience,omitempty"`
    Delegates []string `json:"delegates,omitempty"`
    IncludeEmail *bool `json:"includeEmail,omitempty"`
    
}

