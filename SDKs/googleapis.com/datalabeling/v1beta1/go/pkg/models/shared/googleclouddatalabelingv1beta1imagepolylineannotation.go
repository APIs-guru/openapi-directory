package shared

type GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation struct {
	AnnotationSpec     *GoogleCloudDatalabelingV1beta1AnnotationSpec     `json:"annotationSpec"`
	NormalizedPolyline *GoogleCloudDatalabelingV1beta1NormalizedPolyline `json:"normalizedPolyline"`
	Polyline           *GoogleCloudDatalabelingV1beta1Polyline           `json:"polyline"`
}
