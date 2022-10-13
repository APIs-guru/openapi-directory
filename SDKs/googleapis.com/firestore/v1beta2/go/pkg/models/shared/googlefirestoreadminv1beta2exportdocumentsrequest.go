package shared

type GoogleFirestoreAdminV1beta2ExportDocumentsRequest struct {
	CollectionIds   []string `json:"collectionIds"`
	OutputURIPrefix *string  `json:"outputUriPrefix"`
}
