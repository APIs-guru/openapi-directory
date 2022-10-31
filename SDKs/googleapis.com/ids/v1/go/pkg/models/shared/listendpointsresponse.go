package shared

type ListEndpointsResponse struct {
	Endpoints     []Endpoint `json:"endpoints,omitempty"`
	NextPageToken *string    `json:"nextPageToken,omitempty"`
	Unreachable   []string   `json:"unreachable,omitempty"`
}
