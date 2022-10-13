package shared

type Activity struct {
	ContentDetails *ActivityContentDetails `json:"contentDetails"`
	Etag           *string                 `json:"etag"`
	ID             *string                 `json:"id"`
	Kind           *string                 `json:"kind"`
	Snippet        *ActivitySnippet        `json:"snippet"`
}
