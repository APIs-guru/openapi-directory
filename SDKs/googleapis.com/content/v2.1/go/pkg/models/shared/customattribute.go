package shared



type CustomAttribute struct {
    GroupValues []CustomAttribute `json:"groupValues,omitempty"`
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

