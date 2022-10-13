package shared

type ListDocumentsResponse struct {
	Documents     []Document `json:"documents"`
	NextPageToken *string    `json:"nextPageToken"`
}
