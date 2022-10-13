package shared

type GoogleFirestoreAdminV1ImportDocumentsRequest struct {
	CollectionIds  []string `json:"collectionIds"`
	InputURIPrefix *string  `json:"inputUriPrefix"`
}
