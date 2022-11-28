package shared

// CreativesListResponse
// Creative List Response
type CreativesListResponse struct {
	Creatives     []Creative `json:"creatives,omitempty"`
	Kind          *string    `json:"kind,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
