package shared

// ListDNSPeeringsResponse
// Response message for list DNS peerings.
type ListDNSPeeringsResponse struct {
	DNSPeerings   []DNSPeering `json:"dnsPeerings,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
