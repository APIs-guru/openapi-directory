package shared



type ListPeeringsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Peerings []Peering `json:"peerings,omitempty"`
    Unreachable []string `json:"unreachable,omitempty"`
    
}

