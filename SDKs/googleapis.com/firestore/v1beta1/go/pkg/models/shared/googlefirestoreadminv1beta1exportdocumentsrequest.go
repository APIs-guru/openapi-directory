package shared

// GoogleFirestoreAdminV1beta1ExportDocumentsRequest
// The request for FirestoreAdmin.ExportDocuments.
type GoogleFirestoreAdminV1beta1ExportDocumentsRequest struct {
	CollectionIds   []string `json:"collectionIds,omitempty"`
	OutputURIPrefix *string  `json:"outputUriPrefix,omitempty"`
}
