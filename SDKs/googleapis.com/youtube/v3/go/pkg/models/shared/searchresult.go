package shared

type SearchResult struct {
	Etag    *string              `json:"etag"`
	ID      *ResourceID          `json:"id"`
	Kind    *string              `json:"kind"`
	Snippet *SearchResultSnippet `json:"snippet"`
}
