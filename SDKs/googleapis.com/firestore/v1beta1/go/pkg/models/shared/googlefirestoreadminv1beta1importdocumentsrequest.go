package shared

type GoogleFirestoreAdminV1beta1ImportDocumentsRequest struct {
	CollectionIds  []string `json:"collectionIds"`
	InputURIPrefix *string  `json:"inputUriPrefix"`
}
