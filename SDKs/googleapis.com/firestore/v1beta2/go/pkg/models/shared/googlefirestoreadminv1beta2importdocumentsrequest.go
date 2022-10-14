package shared

type GoogleFirestoreAdminV1beta2ImportDocumentsRequest struct {
	CollectionIds  []string `json:"collectionIds,omitempty"`
	InputURIPrefix *string  `json:"inputUriPrefix,omitempty"`
}
