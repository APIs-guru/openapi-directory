package shared

type ListQuerySourcesResponse struct {
	NextPageToken *string       `json:"nextPageToken"`
	Sources       []QuerySource `json:"sources"`
}
