package shared

// ListCollectionsResponse
// Response message for the ListCollections method.
type ListCollectionsResponse struct {
	NextPageToken *string      `json:"nextPageToken,omitempty"`
	Resources     []Collection `json:"resources,omitempty"`
}
