package shared

type ListPeeringsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Peerings      []Peering `json:"peerings"`
	Unreachable   []string  `json:"unreachable"`
}
