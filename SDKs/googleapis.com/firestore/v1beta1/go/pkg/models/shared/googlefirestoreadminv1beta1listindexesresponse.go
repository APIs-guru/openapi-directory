package shared

type GoogleFirestoreAdminV1beta1ListIndexesResponse struct {
	Indexes       []GoogleFirestoreAdminV1beta1Index `json:"indexes"`
	NextPageToken *string                            `json:"nextPageToken"`
}
