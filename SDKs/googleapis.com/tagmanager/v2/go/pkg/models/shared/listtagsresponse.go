package shared

type ListTagsResponse struct {
	NextPageToken *string `json:"nextPageToken"`
	Tag           []Tag   `json:"tag"`
}
