package shared

type ListEndpointsResponse struct {
	Endpoints     []Endpoint `json:"endpoints"`
	NextPageToken *string    `json:"nextPageToken"`
}
