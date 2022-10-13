package shared

type GoogleFirestoreAdminV1ExportDocumentsRequest struct {
	CollectionIds   []string `json:"collectionIds"`
	OutputURIPrefix *string  `json:"outputUriPrefix"`
}
