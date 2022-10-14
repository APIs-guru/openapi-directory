package shared

type GoogleDatastoreAdminV1beta1EntityFilter struct {
	Kinds        []string `json:"kinds,omitempty"`
	NamespaceIds []string `json:"namespaceIds,omitempty"`
}
