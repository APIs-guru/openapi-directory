package shared

type GoogleDatastoreAdminV1ListIndexesResponse struct {
	Indexes       []GoogleDatastoreAdminV1Index `json:"indexes"`
	NextPageToken *string                       `json:"nextPageToken"`
}
