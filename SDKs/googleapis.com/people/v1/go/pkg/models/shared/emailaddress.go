package shared

type EmailAddress struct {
	DisplayName   *string        `json:"displayName"`
	FormattedType *string        `json:"formattedType"`
	Metadata      *FieldMetadata `json:"metadata"`
	Type          *string        `json:"type"`
	Value         *string        `json:"value"`
}
