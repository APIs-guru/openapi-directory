package shared

// GoogleCloudRetailV2betaCompleteQueryResponse
// Response of the auto-complete query.
type GoogleCloudRetailV2betaCompleteQueryResponse struct {
	AttributionToken    *string                                                          `json:"attributionToken,omitempty"`
	CompletionResults   []GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult   `json:"completionResults,omitempty"`
	RecentSearchResults []GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult `json:"recentSearchResults,omitempty"`
}
