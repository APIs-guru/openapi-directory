package shared

// ListMattersResponse
// Provides the list of matters.
type ListMattersResponse struct {
	Matters       []Matter `json:"matters,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
