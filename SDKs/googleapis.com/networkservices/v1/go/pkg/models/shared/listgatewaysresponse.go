package shared

type ListGatewaysResponse struct {
	Gateways      []Gateway `json:"gateways,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
