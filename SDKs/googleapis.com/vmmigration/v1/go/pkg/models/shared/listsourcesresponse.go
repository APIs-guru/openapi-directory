package shared

// ListSourcesResponse
// Response message for 'ListSources' request.
type ListSourcesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Sources       []Source `json:"sources,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
