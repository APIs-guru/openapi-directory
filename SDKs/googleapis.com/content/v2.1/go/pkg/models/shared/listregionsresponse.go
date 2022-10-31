package shared

type ListRegionsResponse struct {
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Regions       []Region `json:"regions,omitempty"`
}
