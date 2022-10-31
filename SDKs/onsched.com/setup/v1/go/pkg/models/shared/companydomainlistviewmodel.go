package shared

type CompanyDomainListViewModel struct {
	Data       []CompanyDomainViewModel `json:"data,omitempty"`
	ObjectName *string                  `json:"objectName,omitempty"`
	URL        *string                  `json:"url,omitempty"`
}
