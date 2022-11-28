package shared

// GoogleDatastoreAdminV1ImportEntitiesRequest
// The request for google.datastore.admin.v1.DatastoreAdmin.ImportEntities.
type GoogleDatastoreAdminV1ImportEntitiesRequest struct {
	EntityFilter *GoogleDatastoreAdminV1EntityFilter `json:"entityFilter,omitempty"`
	InputURL     *string                             `json:"inputUrl,omitempty"`
	Labels       map[string]string                   `json:"labels,omitempty"`
}
