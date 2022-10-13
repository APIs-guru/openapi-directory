package shared

type EventType struct {
	Description         *string              `json:"description"`
	EventSchemaURI      *string              `json:"eventSchemaUri"`
	FilteringAttributes []FilteringAttribute `json:"filteringAttributes"`
	Type                *string              `json:"type"`
}
