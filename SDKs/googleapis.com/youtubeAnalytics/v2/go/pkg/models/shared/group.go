package shared

type Group struct {
	ContentDetails *GroupContentDetails `json:"contentDetails,omitempty"`
	Errors         *Errors              `json:"errors,omitempty"`
	Etag           *string              `json:"etag,omitempty"`
	ID             *string              `json:"id,omitempty"`
	Kind           *string              `json:"kind,omitempty"`
	Snippet        *GroupSnippet        `json:"snippet,omitempty"`
}
