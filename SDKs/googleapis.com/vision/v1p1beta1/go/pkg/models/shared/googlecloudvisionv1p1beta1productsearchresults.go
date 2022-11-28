package shared

// GoogleCloudVisionV1p1beta1ProductSearchResults
// Results for a product search request.
type GoogleCloudVisionV1p1beta1ProductSearchResults struct {
	IndexTime             *string                                                       `json:"indexTime,omitempty"`
	ProductGroupedResults []GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult `json:"productGroupedResults,omitempty"`
	Results               []GoogleCloudVisionV1p1beta1ProductSearchResultsResult        `json:"results,omitempty"`
}
