package shared

// ArticleAndParentComment
// A type of context specific to a comment left on a single-threaded comment message board, where comments are either a top level comment or the child of a top level comment.
type ArticleAndParentComment struct {
	Article       *TextEntry `json:"article,omitempty"`
	ParentComment *TextEntry `json:"parentComment,omitempty"`
}
