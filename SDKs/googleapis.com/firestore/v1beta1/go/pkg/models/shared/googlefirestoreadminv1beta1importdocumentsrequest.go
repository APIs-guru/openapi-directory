package shared

// GoogleFirestoreAdminV1beta1ImportDocumentsRequest
// The request for FirestoreAdmin.ImportDocuments.
type GoogleFirestoreAdminV1beta1ImportDocumentsRequest struct {
	CollectionIds  []string `json:"collectionIds,omitempty"`
	InputURIPrefix *string  `json:"inputUriPrefix,omitempty"`
}
