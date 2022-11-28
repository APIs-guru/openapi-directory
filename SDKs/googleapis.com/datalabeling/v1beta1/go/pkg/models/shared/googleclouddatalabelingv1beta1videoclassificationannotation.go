package shared

// GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation
// Video classification annotation.
type GoogleCloudDatalabelingV1beta1VideoClassificationAnnotation struct {
	AnnotationSpec *GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationSpec,omitempty"`
	TimeSegment    *GoogleCloudDatalabelingV1beta1TimeSegment    `json:"timeSegment,omitempty"`
}
