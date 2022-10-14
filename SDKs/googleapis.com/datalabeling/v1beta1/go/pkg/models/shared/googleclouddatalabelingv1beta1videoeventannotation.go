package shared

type GoogleCloudDatalabelingV1beta1VideoEventAnnotation struct {
	AnnotationSpec *GoogleCloudDatalabelingV1beta1AnnotationSpec `json:"annotationSpec,omitempty"`
	TimeSegment    *GoogleCloudDatalabelingV1beta1TimeSegment    `json:"timeSegment,omitempty"`
}
