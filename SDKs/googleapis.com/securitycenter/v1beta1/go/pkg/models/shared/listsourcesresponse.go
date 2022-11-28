package shared

// ListSourcesResponse
// Response message for listing sources.
type ListSourcesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Sources       []Source `json:"sources,omitempty"`
}
