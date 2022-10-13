package shared

type GoogleFirestoreAdminV1ListIndexesResponse struct {
	Indexes       []GoogleFirestoreAdminV1Index `json:"indexes"`
	NextPageToken *string                       `json:"nextPageToken"`
}
