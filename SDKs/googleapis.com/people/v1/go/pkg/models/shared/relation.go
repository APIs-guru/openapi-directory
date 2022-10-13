package shared

type Relation struct {
	FormattedType *string        `json:"formattedType"`
	Metadata      *FieldMetadata `json:"metadata"`
	Person        *string        `json:"person"`
	Type          *string        `json:"type"`
}
