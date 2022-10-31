package shared



type Annotation struct {
    Attributes *Attributes `json:"attributes,omitempty"`
    Description *TruncatableString `json:"description,omitempty"`
    
}

