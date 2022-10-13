package shared

type CommentList struct {
	Comments      []Comment `json:"comments"`
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
}
