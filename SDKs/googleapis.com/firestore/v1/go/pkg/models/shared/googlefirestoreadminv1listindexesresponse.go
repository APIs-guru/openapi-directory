package shared

// GoogleFirestoreAdminV1ListIndexesResponse
// The response for FirestoreAdmin.ListIndexes.
type GoogleFirestoreAdminV1ListIndexesResponse struct {
	Indexes       []GoogleFirestoreAdminV1Index `json:"indexes,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
