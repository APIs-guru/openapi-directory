package shared



type AuthenticatorConfigRepresentation struct {
    Alias *string `json:"alias,omitempty"`
    Config map[string]interface{} `json:"config,omitempty"`
    ID *string `json:"id,omitempty"`
    
}

