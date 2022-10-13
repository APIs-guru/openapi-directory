package shared

type GoogleDatastoreAdminV1beta1ImportEntitiesRequest struct {
	EntityFilter *GoogleDatastoreAdminV1beta1EntityFilter `json:"entityFilter"`
	InputURL     *string                                  `json:"inputUrl"`
	Labels       map[string]string                        `json:"labels"`
}
