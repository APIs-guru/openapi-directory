package shared



type URL struct {
    FormattedType *string `json:"formattedType,omitempty"`
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    Type *string `json:"type,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

