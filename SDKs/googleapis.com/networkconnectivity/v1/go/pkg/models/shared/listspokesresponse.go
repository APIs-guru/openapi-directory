package shared

// ListSpokesResponse
// The response for HubService.ListSpokes.
type ListSpokesResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Spokes        []Spoke  `json:"spokes,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
