package shared

// GoogleCloudDatalabelingV1beta1VideoEventAnnotation
// Video event annotation.
type GoogleCloudDatalabelingV1beta1VideoEventAnnotation struct {
	AnnotationSpec *GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationSpec,omitempty"`
	TimeSegment    *GoogleCloudDatalabelingV1beta1TimeSegment    `json:"timeSegment,omitempty"`
}
