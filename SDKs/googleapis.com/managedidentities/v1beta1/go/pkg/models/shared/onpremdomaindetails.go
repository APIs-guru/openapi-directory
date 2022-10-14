package shared

type OnPremDomainDetails struct {
	DisableSidFiltering *bool   `json:"disableSidFiltering,omitempty"`
	DomainName          *string `json:"domainName,omitempty"`
}
