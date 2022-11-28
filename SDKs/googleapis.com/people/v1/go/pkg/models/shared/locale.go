package shared

// LocaleInput
// A person's locale preference.
type LocaleInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Value    *string             `json:"value,omitempty"`
}

// Locale
// A person's locale preference.
type Locale struct {
	Metadata *FieldMetadata `json:"metadata,omitempty"`
	Value    *string        `json:"value,omitempty"`
}
