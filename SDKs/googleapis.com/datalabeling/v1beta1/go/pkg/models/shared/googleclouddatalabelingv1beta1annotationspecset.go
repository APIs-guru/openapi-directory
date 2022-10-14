package shared

type GoogleCloudDatalabelingV1beta1AnnotationSpecSet struct {
	AnnotationSpecs   []GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationSpecs,omitempty"`
	BlockingResources []string                                       `json:"blockingResources,omitempty"`
	Description       *string                                        `json:"description,omitempty"`
	DisplayName       *string                                        `json:"displayName,omitempty"`
	Name              *string                                        `json:"name,omitempty"`
}
