package shared



type AccessConfig struct {
    Name *string `json:"name,omitempty"`
    NatIP *string `json:"natIp,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

