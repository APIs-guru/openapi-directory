package shared



type Event struct {
    Date *Date `json:"date,omitempty"`
    FormattedType *string `json:"formattedType,omitempty"`
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

