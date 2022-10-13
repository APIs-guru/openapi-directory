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
	DeliveryErrors          []DeliveryError                   `json:"deliveryErrors"`
	DkimSuccessRatio        *float64                          `json:"dkimSuccessRatio"`
	DmarcSuccessRatio       *float64                          `json:"dmarcSuccessRatio"`
	DomainReputation        *TrafficStatsDomainReputationEnum `json:"domainReputation"`
	InboundEncryptionRatio  *float64                          `json:"inboundEncryptionRatio"`
	IPReputations           []IPReputation                    `json:"ipReputations"`
	Name                    *string                           `json:"name"`
	OutboundEncryptionRatio *float64                          `json:"outboundEncryptionRatio"`
	SpammyFeedbackLoops     []FeedbackLoop                    `json:"spammyFeedbackLoops"`
	SpfSuccessRatio         *float64                          `json:"spfSuccessRatio"`
	UserReportedSpamRatio   *float64                          `json:"userReportedSpamRatio"`
}
