package shared

// ListDomainsResponse
// The response to listing Domains.
type ListDomainsResponse struct {
	Domains       []Domain `json:"domains,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
