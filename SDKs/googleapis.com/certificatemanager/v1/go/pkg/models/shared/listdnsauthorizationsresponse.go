package shared

type ListDNSAuthorizationsResponse struct {
	DNSAuthorizations []DNSAuthorization `json:"dnsAuthorizations"`
	NextPageToken     *string            `json:"nextPageToken"`
	Unreachable       []string           `json:"unreachable"`
}
