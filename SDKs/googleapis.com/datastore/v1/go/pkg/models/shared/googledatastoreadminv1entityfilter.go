package shared

type GoogleDatastoreAdminV1EntityFilter struct {
	Kinds        []string `json:"kinds"`
	NamespaceIds []string `json:"namespaceIds"`
}
