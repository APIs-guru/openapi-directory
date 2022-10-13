package shared

type GoogleCloudDialogflowV2AnnotatedMessagePart struct {
	EntityType     *string      `json:"entityType"`
	FormattedValue *interface{} `json:"formattedValue"`
	Text           *string      `json:"text"`
}
