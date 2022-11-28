package shared

// ListCommentsResponse
// The response message for the ListComments endpoint.
type ListCommentsResponse struct {
	Comments      []Comment `json:"comments,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
