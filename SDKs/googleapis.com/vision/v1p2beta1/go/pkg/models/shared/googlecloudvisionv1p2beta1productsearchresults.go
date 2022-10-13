package shared

type GoogleCloudVisionV1p2beta1ProductSearchResults struct {
	IndexTime             *string                                                       `json:"indexTime"`
	ProductGroupedResults []GoogleCloudVisionV1p2beta1ProductSearchResultsGroupedResult `json:"productGroupedResults"`
	Results               []GoogleCloudVisionV1p2beta1ProductSearchResultsResult        `json:"results"`
}
