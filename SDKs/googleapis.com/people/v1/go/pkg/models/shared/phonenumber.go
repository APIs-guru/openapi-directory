package shared



type PhoneNumber struct {
    CanonicalForm *string `json:"canonicalForm,omitempty"`
    FormattedType *string `json:"formattedType,omitempty"`
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

