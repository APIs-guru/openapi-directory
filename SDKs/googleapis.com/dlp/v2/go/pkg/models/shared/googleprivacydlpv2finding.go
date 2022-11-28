package shared

type GooglePrivacyDlpV2FindingLikelihoodEnum string

const (
	GooglePrivacyDlpV2FindingLikelihoodEnumLikelihoodUnspecified GooglePrivacyDlpV2FindingLikelihoodEnum = "LIKELIHOOD_UNSPECIFIED"
	GooglePrivacyDlpV2FindingLikelihoodEnumVeryUnlikely          GooglePrivacyDlpV2FindingLikelihoodEnum = "VERY_UNLIKELY"
	GooglePrivacyDlpV2FindingLikelihoodEnumUnlikely              GooglePrivacyDlpV2FindingLikelihoodEnum = "UNLIKELY"
	GooglePrivacyDlpV2FindingLikelihoodEnumPossible              GooglePrivacyDlpV2FindingLikelihoodEnum = "POSSIBLE"
	GooglePrivacyDlpV2FindingLikelihoodEnumLikely                GooglePrivacyDlpV2FindingLikelihoodEnum = "LIKELY"
	GooglePrivacyDlpV2FindingLikelihoodEnumVeryLikely            GooglePrivacyDlpV2FindingLikelihoodEnum = "VERY_LIKELY"
)

// GooglePrivacyDlpV2Finding
// Represents a piece of potentially sensitive content.
type GooglePrivacyDlpV2Finding struct {
	CreateTime    *string                                  `json:"createTime,omitempty"`
	FindingID     *string                                  `json:"findingId,omitempty"`
	InfoType      *GooglePrivacyDlpV2InfoType              `json:"infoType,omitempty"`
	JobCreateTime *string                                  `json:"jobCreateTime,omitempty"`
	JobName       *string                                  `json:"jobName,omitempty"`
	Labels        map[string]string                        `json:"labels,omitempty"`
	Likelihood    *GooglePrivacyDlpV2FindingLikelihoodEnum `json:"likelihood,omitempty"`
	Location      *GooglePrivacyDlpV2Location              `json:"location,omitempty"`
	Name          *string                                  `json:"name,omitempty"`
	Quote         *string                                  `json:"quote,omitempty"`
	QuoteInfo     *GooglePrivacyDlpV2QuoteInfo             `json:"quoteInfo,omitempty"`
	ResourceName  *string                                  `json:"resourceName,omitempty"`
	TriggerName   *string                                  `json:"triggerName,omitempty"`
}
