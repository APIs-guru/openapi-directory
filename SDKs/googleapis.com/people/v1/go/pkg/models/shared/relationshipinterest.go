package shared

type RelationshipInterest struct {
	FormattedValue *string        `json:"formattedValue"`
	Metadata       *FieldMetadata `json:"metadata"`
	Value          *string        `json:"value"`
}
