package shared

// OccupationInput
// A person's occupation.
type OccupationInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}

// Occupation
// A person's occupation.
type Occupation struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
