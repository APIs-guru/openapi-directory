package shared

type Activity struct {
	ContentDetails *ActivityContentDetails `json:"contentDetails,omitempty"`
	Etag           *string                 `json:"etag,omitempty"`
	ID             *string                 `json:"id,omitempty"`
	Kind           *string                 `json:"kind,omitempty"`
	Snippet        *ActivitySnippet        `json:"snippet,omitempty"`
}
