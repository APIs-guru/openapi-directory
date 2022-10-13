package shared

type GoogleCloudDatalabelingV1beta1VideoObjectTrackingAnnotation struct {
	AnnotationSpec       *GoogleCloudDatalabelingV1beta1AnnotationSpec       `json:"annotationSpec"`
	ObjectTrackingFrames []GoogleCloudDatalabelingV1beta1ObjectTrackingFrame `json:"objectTrackingFrames"`
	TimeSegment          *GoogleCloudDatalabelingV1beta1TimeSegment          `json:"timeSegment"`
}
