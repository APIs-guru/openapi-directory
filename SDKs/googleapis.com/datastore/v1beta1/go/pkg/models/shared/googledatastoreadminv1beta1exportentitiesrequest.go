package shared

// GoogleDatastoreAdminV1beta1ExportEntitiesRequest
// The request for google.datastore.admin.v1beta1.DatastoreAdmin.ExportEntities.
type GoogleDatastoreAdminV1beta1ExportEntitiesRequest struct {
	EntityFilter    *GoogleDatastoreAdminV1beta1EntityFilter `json:"entityFilter,omitempty"`
	Labels          map[string]string                        `json:"labels,omitempty"`
	OutputURLPrefix *string                                  `json:"outputUrlPrefix,omitempty"`
}
