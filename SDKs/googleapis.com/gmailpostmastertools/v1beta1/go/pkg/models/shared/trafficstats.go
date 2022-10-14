package shared

type TrafficStatsDomainReputationEnum string

const (
	TrafficStatsDomainReputationEnumReputationCategoryUnspecified TrafficStatsDomainReputationEnum = "REPUTATION_CATEGORY_UNSPECIFIED"
	TrafficStatsDomainReputationEnumHigh                          TrafficStatsDomainReputationEnum = "HIGH"
	TrafficStatsDomainReputationEnumMedium                        TrafficStatsDomainReputationEnum = "MEDIUM"
	TrafficStatsDomainReputationEnumLow                           TrafficStatsDomainReputationEnum = "LOW"
	TrafficStatsDomainReputationEnumBad                           TrafficStatsDomainReputationEnum = "BAD"
)

type TrafficStats struct {
	DeliveryErrors          []DeliveryError                   `json:"deliveryErrors,omitempty"`
	DkimSuccessRatio        *float64                          `json:"dkimSuccessRatio,omitempty"`
	DmarcSuccessRatio       *float64                          `json:"dmarcSuccessRatio,omitempty"`
	DomainReputation        *TrafficStatsDomainReputationEnum `json:"domainReputation,omitempty"`
	InboundEncryptionRatio  *float64                          `json:"inboundEncryptionRatio,omitempty"`
	IPReputations           []IPReputation                    `json:"ipReputations,omitempty"`
	Name                    *string                           `json:"name,omitempty"`
	OutboundEncryptionRatio *float64                          `json:"outboundEncryptionRatio,omitempty"`
	SpammyFeedbackLoops     []FeedbackLoop                    `json:"spammyFeedbackLoops,omitempty"`
	SpfSuccessRatio         *float64                          `json:"spfSuccessRatio,omitempty"`
	UserReportedSpamRatio   *float64                          `json:"userReportedSpamRatio,omitempty"`
}
