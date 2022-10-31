package shared

type GoogleCloudVisionV1p2beta1ProductSearchResults struct {
	IndexTime             *string                                                       `json:"indexTime,omitempty"`
	ProductGroupedResults []GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult `json:"productGroupedResults,omitempty"`
	Results               []GoogleCloudVisionV1p2beta1ProductSearchResultsResult        `json:"results,omitempty"`
}
