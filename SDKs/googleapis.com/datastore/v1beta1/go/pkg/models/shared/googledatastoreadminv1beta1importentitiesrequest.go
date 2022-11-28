package shared

// GoogleDatastoreAdminV1beta1ImportEntitiesRequest
// The request for google.datastore.admin.v1beta1.DatastoreAdmin.ImportEntities.
type GoogleDatastoreAdminV1beta1ImportEntitiesRequest struct {
	EntityFilter *GoogleDatastoreAdminV1beta1EntityFilter `json:"entityFilter,omitempty"`
	InputURL     *string                                  `json:"inputUrl,omitempty"`
	Labels       map[string]string                        `json:"labels,omitempty"`
}
