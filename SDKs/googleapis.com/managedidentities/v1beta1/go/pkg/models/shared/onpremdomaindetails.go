package shared

type OnPremDomainDetails struct {
	DisableSidFiltering *bool   `json:"disableSidFiltering"`
	DomainName          *string `json:"domainName"`
}
