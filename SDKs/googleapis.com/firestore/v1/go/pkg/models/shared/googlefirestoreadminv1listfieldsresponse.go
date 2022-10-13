package shared

type GoogleFirestoreAdminV1ListFieldsResponse struct {
	Fields        []GoogleFirestoreAdminV1Field `json:"fields"`
	NextPageToken *string                       `json:"nextPageToken"`
}
