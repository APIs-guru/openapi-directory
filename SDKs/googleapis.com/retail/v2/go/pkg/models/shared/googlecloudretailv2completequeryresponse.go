package shared

// GoogleCloudRetailV2CompleteQueryResponse
// Response of the auto-complete query.
type GoogleCloudRetailV2CompleteQueryResponse struct {
	AttributionToken    *string                                                      `json:"attributionToken,omitempty"`
	CompletionResults   []GoogleCloudRetailV2CompleteQueryResponseCompletionResult   `json:"completionResults,omitempty"`
	RecentSearchResults []GoogleCloudRetailV2CompleteQueryResponseRecentSearchResult `json:"recentSearchResults,omitempty"`
}
