package shared

type ListViewsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Views         []LogView `json:"views,omitempty"`
}
