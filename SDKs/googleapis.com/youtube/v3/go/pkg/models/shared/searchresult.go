package shared

type SearchResult struct {
	Etag    *string              `json:"etag,omitempty"`
	ID      *ResourceID          `json:"id,omitempty"`
	Kind    *string              `json:"kind,omitempty"`
	Snippet *SearchResultSnippet `json:"snippet,omitempty"`
}
