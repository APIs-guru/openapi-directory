package shared

// ListRoutesResponse
// Route list response.
type ListRoutesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Routes        []Route  `json:"routes,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
