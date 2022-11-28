package shared

// RelationshipInterest
// **DEPRECATED**: No data will be returned A person's relationship interest .
type RelationshipInterest struct {
	FormattedValue *string        `json:"formattedValue,omitempty"`
	Metadata       *FieldMetadata `json:"metadata,omitempty"`
	Value          *string        `json:"value,omitempty"`
}
