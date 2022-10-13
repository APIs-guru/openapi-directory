package shared

type DatafeedsListResponse struct {
	Kind          *string    `json:"kind"`
	NextPageToken *string    `json:"nextPageToken"`
	Resources     []Datafeed `json:"resources"`
}
