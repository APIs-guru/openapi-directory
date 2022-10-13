package shared

type OrderDocumentsListResponse struct {
	Kind           *string         `json:"kind"`
	NextPageToken  *string         `json:"nextPageToken"`
	OrderDocuments []OrderDocument `json:"orderDocuments"`
}
