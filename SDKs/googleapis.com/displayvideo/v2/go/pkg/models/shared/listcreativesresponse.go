package shared

type ListCreativesResponse struct {
	Creatives     []Creative `json:"creatives,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
}
