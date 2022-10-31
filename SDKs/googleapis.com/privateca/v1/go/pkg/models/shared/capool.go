package shared




type CaPoolTierEnum string

const (
    CaPoolTierEnumTierUnspecified CaPoolTierEnum = "TIER_UNSPECIFIED"
CaPoolTierEnumEnterprise CaPoolTierEnum = "ENTERPRISE"
CaPoolTierEnumDevops CaPoolTierEnum = "DEVOPS"
)


type CaPool struct {
    IssuancePolicy *IssuancePolicy `json:"issuancePolicy,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    PublishingOptions *PublishingOptions `json:"publishingOptions,omitempty"`
    Tier *CaPoolTierEnum `json:"tier,omitempty"`
    
}

