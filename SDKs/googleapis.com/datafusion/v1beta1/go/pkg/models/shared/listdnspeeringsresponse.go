package shared

type ListDNSPeeringsResponse struct {
	DNSPeerings   []DNSPeering `json:"dnsPeerings"`
	NextPageToken *string      `json:"nextPageToken"`
}
