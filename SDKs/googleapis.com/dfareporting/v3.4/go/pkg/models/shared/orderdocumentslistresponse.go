package shared

// OrderDocumentsListResponse
// Order document List Response
type OrderDocumentsListResponse struct {
	Kind           *string         `json:"kind,omitempty"`
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	OrderDocuments []OrderDocument `json:"orderDocuments,omitempty"`
}
