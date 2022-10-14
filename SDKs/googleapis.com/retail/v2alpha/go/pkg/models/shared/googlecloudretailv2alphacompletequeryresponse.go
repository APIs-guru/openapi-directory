package shared

type GoogleCloudRetailV2alphaCompleteQueryResponse struct {
	AttributionToken    *string                                                           `json:"attributionToken,omitempty"`
	CompletionResults   []GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult   `json:"completionResults,omitempty"`
	RecentSearchResults []GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult `json:"recentSearchResults,omitempty"`
}
