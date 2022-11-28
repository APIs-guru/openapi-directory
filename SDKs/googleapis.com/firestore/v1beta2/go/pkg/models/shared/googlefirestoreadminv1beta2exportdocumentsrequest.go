package shared

// GoogleFirestoreAdminV1beta2ExportDocumentsRequest
// The request for FirestoreAdmin.ExportDocuments.
type GoogleFirestoreAdminV1beta2ExportDocumentsRequest struct {
	CollectionIds   []string `json:"collectionIds,omitempty"`
	OutputURIPrefix *string  `json:"outputUriPrefix,omitempty"`
}
