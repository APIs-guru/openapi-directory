package shared

type SearchAllResourcesResponse struct {
	NextPageToken *string                `json:"nextPageToken"`
	Results       []ResourceSearchResult `json:"results"`
}
