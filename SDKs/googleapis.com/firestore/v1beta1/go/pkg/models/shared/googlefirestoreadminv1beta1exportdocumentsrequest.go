package shared

type GoogleFirestoreAdminV1beta1ExportDocumentsRequest struct {
	CollectionIds   []string `json:"collectionIds"`
	OutputURIPrefix *string  `json:"outputUriPrefix"`
}
