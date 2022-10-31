package shared



type GoogleDatastoreAdminV1beta1ImportEntitiesRequest struct {
    EntityFilter *GoogleDatastoreAdminV1beta1EntityFilter `json:"entityFilter,omitempty"`
    InputURL *string `json:"inputUrl,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    
}

