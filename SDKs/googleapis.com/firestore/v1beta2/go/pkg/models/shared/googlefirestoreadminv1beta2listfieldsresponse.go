package shared

// GoogleFirestoreAdminV1beta2ListFieldsResponse
// The response for FirestoreAdmin.ListFields.
type GoogleFirestoreAdminV1beta2ListFieldsResponse struct {
	Fields        []GoogleFirestoreAdminV1beta2Field `json:"fields,omitempty"`
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
}
