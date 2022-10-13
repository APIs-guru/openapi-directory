package shared

type CompanyDomainListViewModel struct {
	Data       []CompanyDomainViewModel `json:"data"`
	ObjectName *string                  `json:"objectName"`
	URL        *string                  `json:"url"`
}
