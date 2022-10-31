package shared

type GoogleCloudDatalabelingV1beta1ImagePolylineAnnotation struct {
	AnnotationSpec     *GoogleCloudDatalabelingV1beta1AnnotationSpec     `json:"annotationSpec,omitempty"`
	NormalizedPolyline *GoogleCloudDatalabelingV1beta1NormalizedPolyline `json:"normalizedPolyline,omitempty"`
	Polyline           *GoogleCloudDatalabelingV1beta1Polyline           `json:"polyline,omitempty"`
}
