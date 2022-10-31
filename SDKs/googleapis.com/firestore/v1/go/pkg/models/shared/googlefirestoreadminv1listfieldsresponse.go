package shared

type GoogleFirestoreAdminV1ListFieldsResponse struct {
	Fields        []GoogleFirestoreAdminV1Field `json:"fields,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
