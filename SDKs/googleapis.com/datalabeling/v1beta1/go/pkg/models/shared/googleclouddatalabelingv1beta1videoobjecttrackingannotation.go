package shared

// GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation
// Video object tracking annotation.
type GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation struct {
	AnnotationSpec       *GoogleCloudDatalabelingV1beta1AnnotationSpec       `json:"annotationSpec,omitempty"`
	ObjectTrackingFrames []GoogleCloudDatalabelingV1beta1ObjectTrackingFrame `json:"objectTrackingFrames,omitempty"`
	TimeSegment          *GoogleCloudDatalabelingV1beta1TimeSegment          `json:"timeSegment,omitempty"`
}
