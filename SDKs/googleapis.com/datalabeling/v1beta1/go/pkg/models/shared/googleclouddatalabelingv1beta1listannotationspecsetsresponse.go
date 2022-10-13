package shared

type GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse struct {
	AnnotationSpecSets []GoogleCloudDatalabelingV1beta1AnnotationSpecSet `json:"annotationSpecSets"`
	NextPageToken      *string                                           `json:"nextPageToken"`
}
