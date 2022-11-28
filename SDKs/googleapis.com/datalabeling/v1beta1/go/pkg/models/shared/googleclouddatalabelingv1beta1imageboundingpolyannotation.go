package shared

// GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation
// Image bounding poly annotation. It represents a polygon including bounding box in the image.
type GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation struct {
	AnnotationSpec         *GoogleCloudDatalabelingV1beta1AnnotationSpec         `json:"annotationSpec,omitempty"`
	BoundingPoly           *GoogleCloudDatalabelingV1beta1BoundingPoly           `json:"boundingPoly,omitempty"`
	NormalizedBoundingPoly *GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly `json:"normalizedBoundingPoly,omitempty"`
}
