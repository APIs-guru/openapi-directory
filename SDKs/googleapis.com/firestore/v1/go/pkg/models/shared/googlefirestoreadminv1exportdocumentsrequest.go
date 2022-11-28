package shared

// GoogleFirestoreAdminV1ExportDocumentsRequest
// The request for FirestoreAdmin.ExportDocuments.
type GoogleFirestoreAdminV1ExportDocumentsRequest struct {
	CollectionIds   []string `json:"collectionIds,omitempty"`
	NamespaceIds    []string `json:"namespaceIds,omitempty"`
	OutputURIPrefix *string  `json:"outputUriPrefix,omitempty"`
}
