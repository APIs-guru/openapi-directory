package shared

// GoogleCloudDatalabelingV1beta1AnnotationSpecSet
// An AnnotationSpecSet is a collection of label definitions. For example, in image classification tasks, you define a set of possible labels for images as an AnnotationSpecSet. An AnnotationSpecSet is immutable upon creation.
type GoogleCloudDatalabelingV1beta1AnnotationSpecSet struct {
	AnnotationSpecs   []GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationSpecs,omitempty"`
	BlockingResources []string                                       `json:"blockingResources,omitempty"`
	Description       *string                                        `json:"description,omitempty"`
	DisplayName       *string                                        `json:"displayName,omitempty"`
	Name              *string                                        `json:"name,omitempty"`
}
