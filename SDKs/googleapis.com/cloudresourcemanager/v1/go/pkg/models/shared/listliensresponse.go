package shared

// ListLiensResponse
// The response message for Liens.ListLiens.
type ListLiensResponse struct {
	Liens         []Lien  `json:"liens,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
