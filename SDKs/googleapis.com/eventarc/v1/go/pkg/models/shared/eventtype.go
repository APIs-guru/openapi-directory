package shared

// EventType
// A representation of the event type resource.
type EventType struct {
	Description         *string              `json:"description,omitempty"`
	EventSchemaURI      *string              `json:"eventSchemaUri,omitempty"`
	FilteringAttributes []FilteringAttribute `json:"filteringAttributes,omitempty"`
	Type                *string              `json:"type,omitempty"`
}
