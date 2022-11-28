package shared

// ListLocalPostsResponse
// Response message for ListLocalPosts
type ListLocalPostsResponse struct {
	LocalPosts    []LocalPost `json:"localPosts,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
