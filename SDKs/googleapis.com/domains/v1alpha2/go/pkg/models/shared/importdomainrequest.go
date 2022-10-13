package shared

type ImportDomainRequest struct {
	DomainName *string           `json:"domainName"`
	Labels     map[string]string `json:"labels"`
}
