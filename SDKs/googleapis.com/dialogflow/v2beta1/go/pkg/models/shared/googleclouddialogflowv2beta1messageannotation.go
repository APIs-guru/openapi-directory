package shared

type GoogleCloudDialogflowV2beta1MessageAnnotation struct {
	ContainEntities *bool                                              `json:"containEntities"`
	Parts           []GoogleCloudDialogflowV2beta1AnnotatedMessagePart `json:"parts"`
}
