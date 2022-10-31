package shared



type Credential struct {
    BasicAuth *BasicAuth `json:"basicAuth,omitempty"`
    ServiceAccount *ServiceAccount `json:"serviceAccount,omitempty"`
    UseProjectDefault *bool `json:"useProjectDefault,omitempty"`
    
}

