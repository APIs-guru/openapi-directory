package shared

type ListCollectionsResponse struct {
	NextPageToken *string      `json:"nextPageToken"`
	Resources     []Collection `json:"resources"`
}
