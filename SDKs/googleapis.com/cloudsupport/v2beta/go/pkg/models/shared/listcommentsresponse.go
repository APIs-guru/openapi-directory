package shared

type ListCommentsResponse struct {
	Comments      []Comment `json:"comments"`
	NextPageToken *string   `json:"nextPageToken"`
}
