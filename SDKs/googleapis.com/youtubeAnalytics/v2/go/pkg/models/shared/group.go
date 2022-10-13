package shared

type Group struct {
	ContentDetails *GroupContentDetails `json:"contentDetails"`
	Errors         *Errors              `json:"errors"`
	Etag           *string              `json:"etag"`
	ID             *string              `json:"id"`
	Kind           *string              `json:"kind"`
	Snippet        *GroupSnippet        `json:"snippet"`
}
