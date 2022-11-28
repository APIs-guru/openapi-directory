package shared

// GoogleFirestoreAdminV1ImportDocumentsRequest
// The request for FirestoreAdmin.ImportDocuments.
type GoogleFirestoreAdminV1ImportDocumentsRequest struct {
	CollectionIds  []string `json:"collectionIds,omitempty"`
	InputURIPrefix *string  `json:"inputUriPrefix,omitempty"`
	NamespaceIds   []string `json:"namespaceIds,omitempty"`
}
