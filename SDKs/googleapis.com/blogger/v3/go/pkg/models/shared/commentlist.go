package shared

type CommentList struct {
	Etag          *string   `json:"etag"`
	Items         []Comment `json:"items"`
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
	PrevPageToken *string   `json:"prevPageToken"`
}
