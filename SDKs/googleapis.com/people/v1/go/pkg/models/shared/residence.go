package shared

// Residence
// **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
type Residence struct {
	Current  *bool          `json:"current,omitempty"`
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}

// ResidenceInput
// **DEPRECATED**: Please use `person.locations` instead. A person's past or current residence.
type ResidenceInput struct {
	Current  *bool               `json:"current,omitempty"`
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}
