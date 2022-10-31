package shared

type ListLocalPostsResponse struct {
	LocalPosts    []LocalPost `json:"localPosts,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
