package shared

type GoogleFirestoreAdminV1beta2ListIndexesResponse struct {
	Indexes       []GoogleFirestoreAdminV1beta2Index `json:"indexes"`
	NextPageToken *string                            `json:"nextPageToken"`
}
