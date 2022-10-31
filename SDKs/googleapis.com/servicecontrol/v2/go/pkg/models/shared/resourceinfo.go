package shared



type ResourceInfo struct {
    Container *string `json:"container,omitempty"`
    Location *string `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    Permission *string `json:"permission,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

