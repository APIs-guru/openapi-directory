package shared

type IPReputationReputationEnum string

const (
	IPReputationReputationEnumReputationCategoryUnspecified IPReputationReputationEnum = "REPUTATION_CATEGORY_UNSPECIFIED"
	IPReputationReputationEnumHigh                          IPReputationReputationEnum = "HIGH"
	IPReputationReputationEnumMedium                        IPReputationReputationEnum = "MEDIUM"
	IPReputationReputationEnumLow                           IPReputationReputationEnum = "LOW"
	IPReputationReputationEnumBad                           IPReputationReputationEnum = "BAD"
)

type IPReputation struct {
	IPCount    *string                     `json:"ipCount"`
	NumIps     *string                     `json:"numIps"`
	Reputation *IPReputationReputationEnum `json:"reputation"`
	SampleIps  []string                    `json:"sampleIps"`
}
