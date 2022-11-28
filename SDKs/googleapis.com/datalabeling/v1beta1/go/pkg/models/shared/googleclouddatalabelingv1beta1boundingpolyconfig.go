package shared

// GoogleCloudDatalabelingV1beta1BoundingPolyConfig
// Config for image bounding poly (and bounding box) human labeling task.
type GoogleCloudDatalabelingV1beta1BoundingPolyConfig struct {
	AnnotationSpecSet  *string `json:"annotationSpecSet,omitempty"`
	InstructionMessage *string `json:"instructionMessage,omitempty"`
}
