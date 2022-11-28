package shared

// ListDomainsResponse
// Response message for ListDomains
type ListDomainsResponse struct {
	Domains       []Domain `json:"domains,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
	Unreachable   []string `json:"unreachable,omitempty"`
}
