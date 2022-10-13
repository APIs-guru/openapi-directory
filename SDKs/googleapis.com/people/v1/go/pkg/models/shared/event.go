package shared

type Event struct {
	Date          *Date          `json:"date"`
	FormattedType *string        `json:"formattedType"`
	Metadata      *FieldMetadata `json:"metadata"`
	Type          *string        `json:"type"`
}
