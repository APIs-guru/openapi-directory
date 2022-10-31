package shared



type ResultDisplayField struct {
    Label *string `json:"label,omitempty"`
    OperatorName *string `json:"operatorName,omitempty"`
    Property *NamedProperty `json:"property,omitempty"`
    
}

