package shared

// CalendarURL
// A person's calendar URL.
type CalendarURL struct {
	FormattedType *string        `json:"formattedType,omitempty"`
	Metadata      *FieldMetadata `json:"metadata,omitempty"`
	Type          *string        `json:"type,omitempty"`
	URL           *string        `json:"url,omitempty"`
}

// CalendarURLInput
// A person's calendar URL.
type CalendarURLInput struct {
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Type     *string             `json:"type,omitempty"`
	URL      *string             `json:"url,omitempty"`
}
