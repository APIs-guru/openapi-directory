package shared

// ListCollectionStatusesResponse
// Response message for the ListCollectionStatuses method.
type ListCollectionStatusesResponse struct {
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	Resources     []CollectionStatus `json:"resources,omitempty"`
}
