package shared

// RelationInput
// A person's relation to another person.
type RelationInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Person   *string             `json:"person,omitempty"`
	Type     *string             `json:"type,omitempty"`
}

// Relation
// A person's relation to another person.
type Relation struct {
	FormattedType *string        `json:"formattedType,omitempty"`
	Metadata      *FieldMetadata `json:"metadata,omitempty"`
	Person        *string        `json:"person,omitempty"`
	Type          *string        `json:"type,omitempty"`
}
