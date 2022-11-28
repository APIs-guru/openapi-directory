package shared

// RelationshipStatus
// **DEPRECATED**: No data will be returned A person's relationship status.
type RelationshipStatus struct {
	FormattedValue *string        `json:"formattedValue,omitempty"`
	Metadata       *FieldMetadata `json:"metadata,omitempty"`
	Value          *string        `json:"value,omitempty"`
}
