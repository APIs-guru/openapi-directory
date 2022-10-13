package shared

type GoogleCloudRetailV2alphaCompleteQueryResponse struct {
	AttributionToken    *string                                                           `json:"attributionToken"`
	CompletionResults   []GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult   `json:"completionResults"`
	RecentSearchResults []GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult `json:"recentSearchResults"`
}
