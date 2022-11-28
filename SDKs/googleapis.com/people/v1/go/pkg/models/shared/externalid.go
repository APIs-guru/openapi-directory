package shared

// ExternalIDInput
// An identifier from an external entity related to the person.
type ExternalIDInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Type     *string             `json:"type,omitempty"`
	Value    *string             `json:"value,omitempty"`
}

// ExternalID
// An identifier from an external entity related to the person.
type ExternalID struct {
	FormattedType *string        `json:"formattedType,omitempty"`
	Metadata      *FieldMetadata `json:"metadata,omitempty"`
	Type          *string        `json:"type,omitempty"`
	Value         *string        `json:"value,omitempty"`
}
