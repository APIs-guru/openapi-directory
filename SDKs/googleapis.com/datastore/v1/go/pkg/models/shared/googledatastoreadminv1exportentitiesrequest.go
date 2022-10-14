package shared

type GoogleDatastoreAdminV1ExportEntitiesRequest struct {
	EntityFilter    *GoogleDatastoreAdminV1EntityFilter `json:"entityFilter,omitempty"`
	Labels          map[string]string                   `json:"labels,omitempty"`
	OutputURLPrefix *string                             `json:"outputUrlPrefix,omitempty"`
}
