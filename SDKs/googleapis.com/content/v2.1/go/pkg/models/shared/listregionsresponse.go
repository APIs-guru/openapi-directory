package shared

// ListRegionsResponse
// Response message for the `ListRegions` method.
type ListRegionsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Regions       []Region `json:"regions,omitempty"`
}
