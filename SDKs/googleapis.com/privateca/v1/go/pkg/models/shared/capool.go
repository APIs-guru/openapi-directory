package shared

type CaPoolTierEnum string

const (
	CaPoolTierEnumTierUnspecified CaPoolTierEnum = "TIER_UNSPECIFIED"
	CaPoolTierEnumEnterprise      CaPoolTierEnum = "ENTERPRISE"
	CaPoolTierEnumDevops          CaPoolTierEnum = "DEVOPS"
)

// CaPoolInput
// A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
type CaPoolInput struct {
	IssuancePolicy    *IssuancePolicy    `json:"issuancePolicy,omitempty"`
	Labels            map[string]string  `json:"labels,omitempty"`
	PublishingOptions *PublishingOptions `json:"publishingOptions,omitempty"`
	Tier              *CaPoolTierEnum    `json:"tier,omitempty"`
}

// CaPool
// A CaPool represents a group of CertificateAuthorities that form a trust anchor. A CaPool can be used to manage issuance policies for one or more CertificateAuthority resources and to rotate CA certificates in and out of the trust anchor.
type CaPool struct {
	IssuancePolicy    *IssuancePolicy    `json:"issuancePolicy,omitempty"`
	Labels            map[string]string  `json:"labels,omitempty"`
	Name              *string            `json:"name,omitempty"`
	PublishingOptions *PublishingOptions `json:"publishingOptions,omitempty"`
	Tier              *CaPoolTierEnum    `json:"tier,omitempty"`
}
