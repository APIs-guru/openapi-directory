package shared

type GoogleCloudDatalabelingV1beta1ObjectTrackingFrame struct {
	BoundingPoly           *GoogleCloudDatalabelingV1beta1BoundingPoly           `json:"boundingPoly"`
	NormalizedBoundingPoly *GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly `json:"normalizedBoundingPoly"`
	TimeOffset             *string                                               `json:"timeOffset"`
}
