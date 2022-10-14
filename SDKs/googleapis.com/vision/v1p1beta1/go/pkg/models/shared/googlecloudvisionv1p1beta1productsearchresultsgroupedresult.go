package shared

type GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult struct {
	BoundingPoly      *GoogleCloudVisionV1p1beta1BoundingPoly                          `json:"boundingPoly,omitempty"`
	ObjectAnnotations []GoogleCloudVisionV1p1beta1ProductSearchResultsObjectAnnotation `json:"objectAnnotations,omitempty"`
	Results           []GoogleCloudVisionV1p1beta1ProductSearchResultsResult           `json:"results,omitempty"`
}
