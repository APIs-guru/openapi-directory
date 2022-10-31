package shared



type StartActivityIntent struct {
    Action *string `json:"action,omitempty"`
    Categories []string `json:"categories,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

