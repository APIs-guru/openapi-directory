package shared

type ListViewsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Views         []LogView `json:"views"`
}
