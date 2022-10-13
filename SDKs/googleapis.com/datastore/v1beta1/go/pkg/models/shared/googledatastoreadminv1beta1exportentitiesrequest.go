package shared

type GoogleDatastoreAdminV1beta1ExportEntitiesRequest struct {
	EntityFilter    *GoogleDatastoreAdminV1beta1EntityFilter `json:"entityFilter"`
	Labels          map[string]string                        `json:"labels"`
	OutputURLPrefix *string                                  `json:"outputUrlPrefix"`
}
