package shared

type CommentList struct {
	Items         []Comment `json:"items"`
	Kind          *string   `json:"kind"`
	NextLink      *string   `json:"nextLink"`
	NextPageToken *string   `json:"nextPageToken"`
	SelfLink      *string   `json:"selfLink"`
}
