package shared

// GoogleCloudDialogflowV2AnnotatedMessagePart
// Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.
type GoogleCloudDialogflowV2AnnotatedMessagePart struct {
	EntityType     *string      `json:"entityType,omitempty"`
	FormattedValue *interface{} `json:"formattedValue,omitempty"`
	Text           *string      `json:"text,omitempty"`
}
