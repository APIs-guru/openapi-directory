package shared

// RetrieveImportableDomainsResponse
// Response for the `RetrieveImportableDomains` method.
type RetrieveImportableDomainsResponse struct {
	Domains       []Domain `json:"domains,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
