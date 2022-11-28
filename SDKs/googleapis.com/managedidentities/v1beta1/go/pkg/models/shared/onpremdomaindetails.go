package shared

// OnPremDomainDetails
// OnPremDomainDetails is the message which contains details of on-prem domain which is trusted and needs to be migrated.
type OnPremDomainDetails struct {
	DisableSidFiltering *bool   `json:"disableSidFiltering,omitempty"`
	DomainName          *string `json:"domainName,omitempty"`
}
