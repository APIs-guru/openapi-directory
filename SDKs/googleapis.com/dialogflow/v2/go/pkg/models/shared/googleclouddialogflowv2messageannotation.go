package shared

type GoogleCloudDialogflowV2MessageAnnotation struct {
	ContainEntities *bool                                         `json:"containEntities"`
	Parts           []GoogleCloudDialogflowV2AnnotatedMessagePart `json:"parts"`
}
