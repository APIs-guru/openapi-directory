package shared

// CommentThread
// A *comment thread* represents information that applies to a top level comment and all its replies. It can also include the top level comment itself and some of the replies.
type CommentThread struct {
	Etag    *string               `json:"etag,omitempty"`
	ID      *string               `json:"id,omitempty"`
	Kind    *string               `json:"kind,omitempty"`
	Replies *CommentThreadReplies `json:"replies,omitempty"`
	Snippet *CommentThreadSnippet `json:"snippet,omitempty"`
}
