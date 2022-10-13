package shared

type CommentReplyList struct {
	Items         []CommentReply `json:"items"`
	Kind          *string        `json:"kind"`
	NextLink      *string        `json:"nextLink"`
	NextPageToken *string        `json:"nextPageToken"`
	SelfLink      *string        `json:"selfLink"`
}
