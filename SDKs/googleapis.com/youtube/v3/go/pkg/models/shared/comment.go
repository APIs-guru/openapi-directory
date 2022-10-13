package shared

type Comment struct {
	Etag    *string         `json:"etag"`
	ID      *string         `json:"id"`
	Kind    *string         `json:"kind"`
	Snippet *CommentSnippet `json:"snippet"`
}
