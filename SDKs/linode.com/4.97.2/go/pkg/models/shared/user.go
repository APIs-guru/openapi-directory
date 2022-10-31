package shared



type User struct {
    Email *string `json:"email,omitempty"`
    Restricted *bool `json:"restricted,omitempty"`
    SSHKeys []string `json:"ssh_keys,omitempty"`
    TfaEnabled *bool `json:"tfa_enabled,omitempty"`
    Username *string `json:"username,omitempty"`
    
}

