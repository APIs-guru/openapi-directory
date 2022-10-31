package shared



type SQLServerUserDetails struct {
    Disabled *bool `json:"disabled,omitempty"`
    ServerRoles []string `json:"serverRoles,omitempty"`
    
}

