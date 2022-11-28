package shared

// GoogleCloudDialogflowV2MessageAnnotation
// Represents the result of annotation for the message.
type GoogleCloudDialogflowV2MessageAnnotation struct {
	ContainEntities *bool                                         `json:"containEntities,omitempty"`
	Parts           []GoogleCloudDialogflowV2AnnotatedMessagePart `json:"parts,omitempty"`
}
