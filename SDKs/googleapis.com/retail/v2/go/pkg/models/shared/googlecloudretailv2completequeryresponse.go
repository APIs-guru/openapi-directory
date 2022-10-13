package shared

type GoogleCloudRetailV2CompleteQueryResponse struct {
	AttributionToken    *string                                                      `json:"attributionToken"`
	CompletionResults   []GoogleCloudRetailV2CompleteQueryResponseCompletionResult   `json:"completionResults"`
	RecentSearchResults []GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult `json:"recentSearchResults"`
}
