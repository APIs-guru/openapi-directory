package shared

type DomainStatusEnum string

const (
	DomainStatusEnumDomainStatusUnspecified    DomainStatusEnum = "DOMAIN_STATUS_UNSPECIFIED"
	DomainStatusEnumDomainChangePending        DomainStatusEnum = "DOMAIN_CHANGE_PENDING"
	DomainStatusEnumDomainActive               DomainStatusEnum = "DOMAIN_ACTIVE"
	DomainStatusEnumDomainVerificationRequired DomainStatusEnum = "DOMAIN_VERIFICATION_REQUIRED"
	DomainStatusEnumDomainVerificationLost     DomainStatusEnum = "DOMAIN_VERIFICATION_LOST"
)

type Domain struct {
	DomainName     *string             `json:"domainName,omitempty"`
	DomainRedirect *DomainRedirect     `json:"domainRedirect,omitempty"`
	Provisioning   *DomainProvisioning `json:"provisioning,omitempty"`
	Site           *string             `json:"site,omitempty"`
	Status         *DomainStatusEnum   `json:"status,omitempty"`
	UpdateTime     *string             `json:"updateTime,omitempty"`
}
