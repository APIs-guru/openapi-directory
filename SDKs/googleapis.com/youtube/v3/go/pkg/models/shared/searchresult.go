package shared

// SearchResult
// A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.
type SearchResult struct {
	Etag    *string              `json:"etag,omitempty"`
	ID      *ResourceID          `json:"id,omitempty"`
	Kind    *string              `json:"kind,omitempty"`
	Snippet *SearchResultSnippet `json:"snippet,omitempty"`
}
