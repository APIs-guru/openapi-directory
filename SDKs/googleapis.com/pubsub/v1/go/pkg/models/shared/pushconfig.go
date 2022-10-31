package shared



type PushConfig struct {
    Attributes map[string]string `json:"attributes,omitempty"`
    OidcToken *OidcToken `json:"oidcToken,omitempty"`
    PushEndpoint *string `json:"pushEndpoint,omitempty"`
    
}

