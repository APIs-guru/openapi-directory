package shared



type GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult struct {
    BoundingPoly *GoogleCloudVisionV1p2beta1BoundingPoly `json:"boundingPoly,omitempty"`
    ObjectAnnotations []GoogleCloudVisionV1p2beta1ProductSearchResultsObjectAnnotation `json:"objectAnnotations,omitempty"`
    Results []GoogleCloudVisionV1p2beta1ProductSearchResultsResult `json:"results,omitempty"`
    
}

