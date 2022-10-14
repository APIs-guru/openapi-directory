package shared

type ListDataSourceResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Sources       []DataSource `json:"sources,omitempty"`
}
