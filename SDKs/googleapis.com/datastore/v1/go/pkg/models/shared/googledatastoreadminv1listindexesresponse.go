package shared

// GoogleDatastoreAdminV1ListIndexesResponse
// The response for google.datastore.admin.v1.DatastoreAdmin.ListIndexes.
type GoogleDatastoreAdminV1ListIndexesResponse struct {
	Indexes       []GoogleDatastoreAdminV1Index `json:"indexes,omitempty"`
	NextPageToken *string                       `json:"nextPageToken,omitempty"`
}
