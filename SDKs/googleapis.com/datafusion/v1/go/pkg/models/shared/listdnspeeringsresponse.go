package shared

type ListDNSPeeringsResponse struct {
	DNSPeerings   []DNSPeering `json:"dnsPeerings,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
