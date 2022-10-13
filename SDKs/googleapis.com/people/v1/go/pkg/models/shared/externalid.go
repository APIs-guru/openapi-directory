package shared

type ExternalID struct {
	FormattedType *string        `json:"formattedType"`
	Metadata      *FieldMetadata `json:"metadata"`
	Type          *string        `json:"type"`
	Value         *string        `json:"value"`
}
