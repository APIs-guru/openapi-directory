package shared

// CommentReplyList
// A list of replies to a comment on a file in Google Drive.
type CommentReplyList struct {
	Items         []CommentReply `json:"items,omitempty"`
	Kind          *string        `json:"kind,omitempty"`
	NextLink      *string        `json:"nextLink,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	SelfLink      *string        `json:"selfLink,omitempty"`
}
