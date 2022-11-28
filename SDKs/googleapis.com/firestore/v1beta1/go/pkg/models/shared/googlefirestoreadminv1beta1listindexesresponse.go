package shared

// GoogleFirestoreAdminV1beta1ListIndexesResponse
// The response for FirestoreAdmin.ListIndexes.
type GoogleFirestoreAdminV1beta1ListIndexesResponse struct {
	Indexes       []GoogleFirestoreAdminV1beta1Index `json:"indexes,omitempty"`
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
}
