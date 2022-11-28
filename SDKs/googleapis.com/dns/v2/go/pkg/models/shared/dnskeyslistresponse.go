package shared

// DNSKeysListResponse
// The response to a request to enumerate DnsKeys in a ManagedZone.
type DNSKeysListResponse struct {
	DNSKeys       []DNSKey        `json:"dnsKeys,omitempty"`
	Header        *ResponseHeader `json:"header,omitempty"`
	Kind          *string         `json:"kind,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
}
