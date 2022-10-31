package shared



type Relation struct {
    FormattedType *string `json:"formattedType,omitempty"`
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    Person *string `json:"person,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

