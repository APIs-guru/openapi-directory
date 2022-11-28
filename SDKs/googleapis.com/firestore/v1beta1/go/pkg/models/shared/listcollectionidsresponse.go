package shared

// ListCollectionIdsResponse
// The response from Firestore.ListCollectionIds.
type ListCollectionIdsResponse struct {
	CollectionIds []string `json:"collectionIds,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
