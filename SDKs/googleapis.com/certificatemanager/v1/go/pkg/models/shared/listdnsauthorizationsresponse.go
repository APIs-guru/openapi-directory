package shared

// ListDNSAuthorizationsResponse
// Response for the `ListDnsAuthorizations` method.
type ListDNSAuthorizationsResponse struct {
	DNSAuthorizations []DNSAuthorization `json:"dnsAuthorizations,omitempty"`
	NextPageToken     *string            `json:"nextPageToken,omitempty"`
	Unreachable       []string           `json:"unreachable,omitempty"`
}
