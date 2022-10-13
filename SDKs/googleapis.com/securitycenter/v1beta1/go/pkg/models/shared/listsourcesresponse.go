package shared

type ListSourcesResponse struct {
	NextPageToken *string  `json:"nextPageToken"`
	Sources       []Source `json:"sources"`
}
