package shared

// ListAuthorizedDomainsResponse
// A list of Authorized Domains.
type ListAuthorizedDomainsResponse struct {
	Domains       []AuthorizedDomain `json:"domains,omitempty"`
	NextPageToken *string            `json:"nextPageToken,omitempty"`
}
