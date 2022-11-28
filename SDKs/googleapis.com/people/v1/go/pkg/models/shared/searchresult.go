package shared

// SearchResult
// A result of a search query.
type SearchResult struct {
	Person *Person `json:"person,omitempty"`
}
