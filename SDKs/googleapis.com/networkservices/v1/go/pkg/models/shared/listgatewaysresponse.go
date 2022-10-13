package shared

type ListGatewaysResponse struct {
	Gateways      []Gateway `json:"gateways"`
	NextPageToken *string   `json:"nextPageToken"`
}
