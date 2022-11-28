package shared

// GoogleDatastoreAdminV1ExportEntitiesRequest
// The request for google.datastore.admin.v1.DatastoreAdmin.ExportEntities.
type GoogleDatastoreAdminV1ExportEntitiesRequest struct {
	EntityFilter    *GoogleDatastoreAdminV1EntityFilter `json:"entityFilter,omitempty"`
	Labels          map[string]string                   `json:"labels,omitempty"`
	OutputURLPrefix *string                             `json:"outputUrlPrefix,omitempty"`
}
