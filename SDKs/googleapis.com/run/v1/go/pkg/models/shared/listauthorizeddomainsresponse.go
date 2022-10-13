package shared

type ListAuthorizedDomainsResponse struct {
	Domains       []AuthorizedDomain `json:"domains"`
	NextPageToken *string            `json:"nextPageToken"`
}
