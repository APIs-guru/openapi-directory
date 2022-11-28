package shared

// ListGatewaysResponse
// Response returned by the ListGateways method.
type ListGatewaysResponse struct {
	Gateways      []Gateway `json:"gateways,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
}
