package shared

// DNSAuthorization
// A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
type DNSAuthorization struct {
	CreateTime        *string            `json:"createTime,omitempty"`
	Description       *string            `json:"description,omitempty"`
	DNSResourceRecord *DNSResourceRecord `json:"dnsResourceRecord,omitempty"`
	Domain            *string            `json:"domain,omitempty"`
	Labels            map[string]string  `json:"labels,omitempty"`
	Name              *string            `json:"name,omitempty"`
	UpdateTime        *string            `json:"updateTime,omitempty"`
}

// DNSAuthorizationInput
// A DnsAuthorization resource describes a way to perform domain authorization for certificate issuance.
type DNSAuthorizationInput struct {
	Description *string           `json:"description,omitempty"`
	Domain      *string           `json:"domain,omitempty"`
	Labels      map[string]string `json:"labels,omitempty"`
	Name        *string           `json:"name,omitempty"`
}
