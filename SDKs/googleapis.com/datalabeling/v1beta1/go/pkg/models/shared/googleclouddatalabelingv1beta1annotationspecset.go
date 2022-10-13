package shared

type GoogleCloudDatalabelingV1beta1AnnotationSpecSet struct {
	AnnotationSpecs   []GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationSpecs"`
	BlockingResources []string                                       `json:"blockingResources"`
	Description       *string                                        `json:"description"`
	DisplayName       *string                                        `json:"displayName"`
	Name              *string                                        `json:"name"`
}
