package shared

// GoogleCloudDialogflowV2beta1MessageAnnotation
// Represents the result of annotation for the message.
type GoogleCloudDialogflowV2beta1MessageAnnotation struct {
	ContainEntities *bool                                              `json:"containEntities,omitempty"`
	Parts           []GoogleCloudDialogflowV2beta1AnnotatedMessagePart `json:"parts,omitempty"`
}
