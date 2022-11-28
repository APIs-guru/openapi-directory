package shared

// CommentList
// A list of comments on a file.
type CommentList struct {
	Comments      []Comment `json:"comments,omitempty"`
	Kind          *string   `json:"kind,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
