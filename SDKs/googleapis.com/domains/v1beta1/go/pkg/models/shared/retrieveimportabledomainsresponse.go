package shared

type RetrieveImportableDomainsResponse struct {
	Domains       []Domain `json:"domains"`
	NextPageToken *string  `json:"nextPageToken"`
}
