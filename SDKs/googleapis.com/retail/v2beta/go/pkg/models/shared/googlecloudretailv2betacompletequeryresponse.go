package shared

type GoogleCloudRetailV2betaCompleteQueryResponse struct {
	AttributionToken    *string                                                          `json:"attributionToken"`
	CompletionResults   []GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult   `json:"completionResults"`
	RecentSearchResults []GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult `json:"recentSearchResults"`
}
