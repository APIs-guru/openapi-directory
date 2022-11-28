package shared

// GoogleCloudDatalabelingV1beta1ObjectTrackingFrame
// Video frame level annotation for object detection and tracking.
type GoogleCloudDatalabelingV1beta1ObjectTrackingFrame struct {
	BoundingPoly           *GoogleCloudDatalabelingV1beta1BoundingPoly           `json:"boundingPoly,omitempty"`
	NormalizedBoundingPoly *GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly `json:"normalizedBoundingPoly,omitempty"`
	TimeOffset             *string                                               `json:"timeOffset,omitempty"`
}
