package shared

// PhoneNumber
// A person's phone number.
type PhoneNumber struct {
	CanonicalForm *string        `json:"canonicalForm,omitempty"`
	FormattedType *string        `json:"formattedType,omitempty"`
	Metadata      *FieldMetadata `json:"metadata,omitempty"`
	Type          *string        `json:"type,omitempty"`
	Value         *string        `json:"value,omitempty"`
}

// PhoneNumberInput
// A person's phone number.
type PhoneNumberInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Type     *string             `json:"type,omitempty"`
	Value    *string             `json:"value,omitempty"`
}
