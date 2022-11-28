package shared

// GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse
// Results of listing annotation spec set under a project.
type GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse struct {
	AnnotationSpecSets []GoogleCloudDatalabelingV1beta1AnnotationSpecSet `json:"annotationSpecSets,omitempty"`
	NextPageToken      *string                                           `json:"nextPageToken,omitempty"`
}
