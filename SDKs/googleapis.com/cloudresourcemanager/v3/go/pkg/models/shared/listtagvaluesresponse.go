package shared

type ListTagValuesResponse struct {
	NextPageToken *string    `json:"nextPageToken"`
	TagValues     []TagValue `json:"tagValues"`
}
