package shared

type GoogleFirestoreAdminV1beta2ImportDocumentsRequest struct {
	CollectionIds  []string `json:"collectionIds"`
	InputURIPrefix *string  `json:"inputUriPrefix"`
}
