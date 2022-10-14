package shared

type EventType struct {
	Description         *string              `json:"description,omitempty"`
	EventSchemaURI      *string              `json:"eventSchemaUri,omitempty"`
	FilteringAttributes []FilteringAttribute `json:"filteringAttributes,omitempty"`
	Type                *string              `json:"type,omitempty"`
}
