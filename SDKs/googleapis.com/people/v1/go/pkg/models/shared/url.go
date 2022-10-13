package shared

type URL struct {
	FormattedType *string        `json:"formattedType"`
	Metadata      *FieldMetadata `json:"metadata"`
	Type          *string        `json:"type"`
	Value         *string        `json:"value"`
}
