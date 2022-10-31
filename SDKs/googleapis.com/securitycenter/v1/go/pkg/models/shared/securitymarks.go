package shared



type SecurityMarks struct {
    CanonicalName *string `json:"canonicalName,omitempty"`
    Marks map[string]string `json:"marks,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

