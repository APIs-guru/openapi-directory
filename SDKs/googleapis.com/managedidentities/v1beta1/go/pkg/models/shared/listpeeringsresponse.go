package shared

// ListPeeringsResponse
// ListPeeringsResponse is the response message for ListPeerings method.
type ListPeeringsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	Peerings      []Peering `json:"peerings,omitempty"`
	Unreachable   []string  `json:"unreachable,omitempty"`
}
