package shared

type GoogleCloudDatalabelingV1beta1ImageBoundingPolyAnnotation struct {
	AnnotationSpec         *GoogleCloudDatalabelingV1beta1AnnotationSpec         `json:"annotationSpec"`
	BoundingPoly           *GoogleCloudDatalabelingV1beta1BoundingPoly           `json:"boundingPoly"`
	NormalizedBoundingPoly *GoogleCloudDatalabelingV1beta1NormalizedBoundingPoly `json:"normalizedBoundingPoly"`
}
