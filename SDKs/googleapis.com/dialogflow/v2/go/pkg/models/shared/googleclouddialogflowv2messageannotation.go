package shared

type GoogleCloudDialogflowV2MessageAnnotation struct {
	ContainEntities *bool                                         `json:"containEntities,omitempty"`
	Parts           []GoogleCloudDialogflowV2AnnotatedMessagePart `json:"parts,omitempty"`
}
