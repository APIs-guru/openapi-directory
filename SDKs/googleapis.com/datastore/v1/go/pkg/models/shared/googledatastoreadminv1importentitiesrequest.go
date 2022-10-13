package shared

type GoogleDatastoreAdminV1ImportEntitiesRequest struct {
	EntityFilter *GoogleDatastoreAdminV1EntityFilter `json:"entityFilter"`
	InputURL     *string                             `json:"inputUrl"`
	Labels       map[string]string                   `json:"labels"`
}
