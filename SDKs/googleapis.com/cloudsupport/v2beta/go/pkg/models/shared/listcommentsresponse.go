package shared

type ListCommentsResponse struct {
	Comments      []Comment `json:"comments,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
