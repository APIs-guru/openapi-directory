package shared

// GoogleFirestoreAdminV1beta2ListIndexesResponse
// The response for FirestoreAdmin.ListIndexes.
type GoogleFirestoreAdminV1beta2ListIndexesResponse struct {
	Indexes       []GoogleFirestoreAdminV1beta2Index `json:"indexes,omitempty"`
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
}
