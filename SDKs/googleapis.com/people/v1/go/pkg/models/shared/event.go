package shared

// Event
// An event related to the person.
type Event struct {
	Date          *Date          `json:"date,omitempty"`
	FormattedType *string        `json:"formattedType,omitempty"`
	Metadata      *FieldMetadata `json:"metadata,omitempty"`
	Type          *string        `json:"type,omitempty"`
}

// EventInput
// An event related to the person.
type EventInput struct {
	Date     *Date               `json:"date,omitempty"`
	Metadata *FieldMetadataInput `json:"metadata,omitempty"`
	Type     *string             `json:"type,omitempty"`
}
