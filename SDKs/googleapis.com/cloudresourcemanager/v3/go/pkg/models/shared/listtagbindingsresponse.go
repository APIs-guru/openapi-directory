package shared

type ListTagBindingsResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	TagBindings   []TagBinding `json:"tagBindings"`
}
