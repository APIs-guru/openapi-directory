package shared

// GoogleFirestoreAdminV1beta2ImportDocumentsRequest
// The request for FirestoreAdmin.ImportDocuments.
type GoogleFirestoreAdminV1beta2ImportDocumentsRequest struct {
	CollectionIds  []string `json:"collectionIds,omitempty"`
	InputURIPrefix *string  `json:"inputUriPrefix,omitempty"`
}
