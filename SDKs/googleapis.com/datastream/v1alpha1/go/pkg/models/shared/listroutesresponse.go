package shared

// ListRoutesResponse
// route list response
type ListRoutesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Routes        []Route  `json:"routes,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
