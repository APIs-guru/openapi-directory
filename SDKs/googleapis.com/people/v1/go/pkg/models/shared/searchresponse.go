package shared

// SearchResponse
// The response to a search request for the authenticated user, given a query.
type SearchResponse struct {
	Results []SearchResult `json:"results,omitempty"`
}
