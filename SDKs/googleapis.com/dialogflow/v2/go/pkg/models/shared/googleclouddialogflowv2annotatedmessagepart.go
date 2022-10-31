package shared

type GoogleCloudDialogflowV2AnnotatedMessagePart struct {
	EntityType     *string      `json:"entityType,omitempty"`
	FormattedValue *interface{} `json:"formattedValue,omitempty"`
	Text           *string      `json:"text,omitempty"`
}
