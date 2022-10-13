package shared

type SearchAllResourcesResponse struct {
	NextPageToken *string                    `json:"nextPageToken"`
	Results       []StandardResourceMetadata `json:"results"`
}
