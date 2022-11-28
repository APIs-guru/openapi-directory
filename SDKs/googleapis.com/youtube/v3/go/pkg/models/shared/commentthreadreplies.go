package shared

// CommentThreadReplies
// Comments written in (direct or indirect) reply to the top level comment.
type CommentThreadReplies struct {
	Comments []Comment `json:"comments,omitempty"`
}
