package shared

type IPReputationReputationEnum string

const (
	IPReputationReputationEnumReputationCategoryUnspecified IPReputationReputationEnum = "REPUTATION_CATEGORY_UNSPECIFIED"
	IPReputationReputationEnumHigh                          IPReputationReputationEnum = "HIGH"
	IPReputationReputationEnumMedium                        IPReputationReputationEnum = "MEDIUM"
	IPReputationReputationEnumLow                           IPReputationReputationEnum = "LOW"
	IPReputationReputationEnumBad                           IPReputationReputationEnum = "BAD"
)

// IPReputation
// IP Reputation information for a set of IPs in a specific reputation category.
type IPReputation struct {
	IPCount    *string                     `json:"ipCount,omitempty"`
	Reputation *IPReputationReputationEnum `json:"reputation,omitempty"`
	SampleIps  []string                    `json:"sampleIps,omitempty"`
}
