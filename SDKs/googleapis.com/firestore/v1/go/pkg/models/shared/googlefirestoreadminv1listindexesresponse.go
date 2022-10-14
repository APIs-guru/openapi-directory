package shared

type GoogleFirestoreAdminV1ListIndexesResponse struct {
	Indexes       []GoogleFirestoreAdminV1Index `json:"indexes,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
