package shared

type ListDomainsResponse struct {
	Domains       []Domain `json:"domains"`
	NextPageToken *string  `json:"nextPageToken"`
}
