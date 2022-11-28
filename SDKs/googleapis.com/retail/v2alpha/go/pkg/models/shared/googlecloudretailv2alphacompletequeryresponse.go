package shared

// GoogleCloudRetailV2alphaCompleteQueryResponse
// Response of the auto-complete query.
type GoogleCloudRetailV2alphaCompleteQueryResponse struct {
	AttributeResults    map[string]GoogleCloudRetailV2alphaCompleteQueryResponseAttributeResult `json:"attributeResults,omitempty"`
	AttributionToken    *string                                                                 `json:"attributionToken,omitempty"`
	CompletionResults   []GoogleCloudRetailV2alphaCompleteQueryResponseCompletionResult         `json:"completionResults,omitempty"`
	RecentSearchResults []GoogleCloudRetailV2alphaCompleteQueryResponseRecentSearchResult       `json:"recentSearchResults,omitempty"`
}
