package shared

// ReplyList
// A list of replies to a comment on a file.
type ReplyList struct {
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Replies       []Reply `json:"replies,omitempty"`
}
