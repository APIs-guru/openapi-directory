package shared

type GoogleCloudVisionV1p1beta1ProductSearchResults struct {
	IndexTime             *string                                                       `json:"indexTime"`
	ProductGroupedResults []GoogleCloudVisionV1p1beta1ProductSearchResultsGroupedResult `json:"productGroupedResults"`
	Results               []GoogleCloudVisionV1p1beta1ProductSearchResultsResult        `json:"results"`
}
