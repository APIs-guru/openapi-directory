package shared

type ListDataSourceResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Sources       []DataSource `json:"sources"`
}
