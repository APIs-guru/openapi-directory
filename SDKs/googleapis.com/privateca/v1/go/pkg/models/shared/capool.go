package shared

type CaPoolTierEnum string

const (
	CaPoolTierEnumTierUnspecified CaPoolTierEnum = "TIER_UNSPECIFIED"
	CaPoolTierEnumEnterprise      CaPoolTierEnum = "ENTERPRISE"
	CaPoolTierEnumDevops          CaPoolTierEnum = "DEVOPS"
)

type CaPool struct {
	IssuancePolicy    *IssuancePolicy    `json:"issuancePolicy"`
	Labels            map[string]string  `json:"labels"`
	Name              *string            `json:"name"`
	PublishingOptions *PublishingOptions `json:"publishingOptions"`
	Tier              *CaPoolTierEnum    `json:"tier"`
}
