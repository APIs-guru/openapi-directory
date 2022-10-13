package shared

type CommentThread struct {
	Etag    *string               `json:"etag"`
	ID      *string               `json:"id"`
	Kind    *string               `json:"kind"`
	Replies *CommentThreadReplies `json:"replies"`
	Snippet *CommentThreadSnippet `json:"snippet"`
}
