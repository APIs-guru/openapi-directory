package shared



type GoogleCloudRetailV2betaCompleteQueryResponse struct {
    AttributionToken *string `json:"attributionToken,omitempty"`
    CompletionResults []GoogleCloudRetailV2betaCompleteQueryResponseCompletionResult `json:"completionResults,omitempty"`
    RecentSearchResults []GoogleCloudRetailV2betaCompleteQueryResponseRecentSearchResult `json:"recentSearchResults,omitempty"`
    
}

