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

type GooglePrivacyDlpV2Finding struct {
	CreateTime    *string                                  `json:"createTime"`
	FindingID     *string                                  `json:"findingId"`
	InfoType      *GooglePrivacyDlpV2InfoType              `json:"infoType"`
	JobCreateTime *string                                  `json:"jobCreateTime"`
	JobName       *string                                  `json:"jobName"`
	Labels        map[string]string                        `json:"labels"`
	Likelihood    *GooglePrivacyDlpV2FindingLikelihoodEnum `json:"likelihood"`
	Location      *GooglePrivacyDlpV2Location              `json:"location"`
	Name          *string                                  `json:"name"`
	Quote         *string                                  `json:"quote"`
	QuoteInfo     *GooglePrivacyDlpV2QuoteInfo             `json:"quoteInfo"`
	ResourceName  *string                                  `json:"resourceName"`
	TriggerName   *string                                  `json:"triggerName"`
}
