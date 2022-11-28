package shared

// ListViewsResponse
// The response from ListViews.
type ListViewsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Views         []LogView `json:"views,omitempty"`
}
