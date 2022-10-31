package shared



type GoogleDatastoreAdminV1beta1ExportEntitiesRequest struct {
    EntityFilter *GoogleDatastoreAdminV1beta1EntityFilter `json:"entityFilter,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    OutputURLPrefix *string `json:"outputUrlPrefix,omitempty"`
    
}

