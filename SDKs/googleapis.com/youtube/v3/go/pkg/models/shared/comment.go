package shared

// Comment
// A *comment* represents a single YouTube comment.
type Comment struct {
	Etag    *string         `json:"etag,omitempty"`
	ID      *string         `json:"id,omitempty"`
	Kind    *string         `json:"kind,omitempty"`
	Snippet *CommentSnippet `json:"snippet,omitempty"`
}
