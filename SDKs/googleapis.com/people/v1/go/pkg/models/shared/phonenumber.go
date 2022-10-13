package shared

type PhoneNumber struct {
	CanonicalForm *string        `json:"canonicalForm"`
	FormattedType *string        `json:"formattedType"`
	Metadata      *FieldMetadata `json:"metadata"`
	Type          *string        `json:"type"`
	Value         *string        `json:"value"`
}
