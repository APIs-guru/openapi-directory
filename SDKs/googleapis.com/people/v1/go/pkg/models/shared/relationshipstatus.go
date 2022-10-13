package shared

type RelationshipStatus struct {
	FormattedValue *string        `json:"formattedValue"`
	Metadata       *FieldMetadata `json:"metadata"`
	Value          *string        `json:"value"`
}
