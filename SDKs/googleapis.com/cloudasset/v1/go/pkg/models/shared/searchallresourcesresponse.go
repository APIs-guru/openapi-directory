package shared

// SearchAllResourcesResponse
// Search all resources response.
type SearchAllResourcesResponse struct {
	NextPageToken *string                `json:"nextPageToken,omitempty"`
	Results       []ResourceSearchResult `json:"results,omitempty"`
}
