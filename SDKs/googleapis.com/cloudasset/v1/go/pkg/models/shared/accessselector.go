package shared



type AccessSelector struct {
    Permissions []string `json:"permissions,omitempty"`
    Roles []string `json:"roles,omitempty"`
    
}

