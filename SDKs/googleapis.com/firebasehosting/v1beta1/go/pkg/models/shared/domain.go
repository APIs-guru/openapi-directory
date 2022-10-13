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
	DomainName     *string             `json:"domainName"`
	DomainRedirect *DomainRedirect     `json:"domainRedirect"`
	Provisioning   *DomainProvisioning `json:"provisioning"`
	Site           *string             `json:"site"`
	Status         *DomainStatusEnum   `json:"status"`
	UpdateTime     *string             `json:"updateTime"`
}
