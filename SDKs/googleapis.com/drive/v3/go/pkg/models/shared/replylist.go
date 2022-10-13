package shared

type ReplyList struct {
	Kind          *string `json:"kind"`
	NextPageToken *string `json:"nextPageToken"`
	Replies       []Reply `json:"replies"`
}
