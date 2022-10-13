package shared

type CalendarURL struct {
	FormattedType *string        `json:"formattedType"`
	Metadata      *FieldMetadata `json:"metadata"`
	Type          *string        `json:"type"`
	URL           *string        `json:"url"`
}
