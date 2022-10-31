package shared



type Option struct {
    Name *string `json:"name,omitempty"`
    Value map[string]interface{} `json:"value,omitempty"`
    
}

