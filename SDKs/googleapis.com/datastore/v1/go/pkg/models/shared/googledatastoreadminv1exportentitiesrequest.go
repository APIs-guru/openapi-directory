package shared

type GoogleDatastoreAdminV1ExportEntitiesRequest struct {
	EntityFilter    *GoogleDatastoreAdminV1EntityFilter `json:"entityFilter"`
	Labels          map[string]string                   `json:"labels"`
	OutputURLPrefix *string                             `json:"outputUrlPrefix"`
}
