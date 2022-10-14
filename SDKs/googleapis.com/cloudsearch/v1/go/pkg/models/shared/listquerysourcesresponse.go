package shared

type ListQuerySourcesResponse struct {
	NextPageToken *string       `json:"nextPageToken,omitempty"`
	Sources       []QuerySource `json:"sources,omitempty"`
}
