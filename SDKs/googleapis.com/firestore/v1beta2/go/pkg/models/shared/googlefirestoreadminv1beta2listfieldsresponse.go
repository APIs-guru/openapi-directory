package shared

type GoogleFirestoreAdminV1beta2ListFieldsResponse struct {
	Fields        []GoogleFirestoreAdminV1beta2Field `json:"fields"`
	NextPageToken *string                            `json:"nextPageToken"`
}
