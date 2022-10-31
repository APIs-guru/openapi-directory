package shared



type EventFilter struct {
    Attribute *string `json:"attribute,omitempty"`
    Operator *string `json:"operator,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

