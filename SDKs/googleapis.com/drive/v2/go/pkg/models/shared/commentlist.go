package shared

// CommentList
// A list of comments on a file in Google Drive.
type CommentList struct {
	Items         []Comment `json:"items,omitempty"`
	Kind          *string   `json:"kind,omitempty"`
	NextLink      *string   `json:"nextLink,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	SelfLink      *string   `json:"selfLink,omitempty"`
}
