package shared

type ListLocalPostsResponse struct {
	LocalPosts    []LocalPost `json:"localPosts"`
	NextPageToken *string     `json:"nextPageToken"`
}
