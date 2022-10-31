package shared

type ListTagsResponse struct {
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Tag           []Tag   `json:"tag,omitempty"`
}
