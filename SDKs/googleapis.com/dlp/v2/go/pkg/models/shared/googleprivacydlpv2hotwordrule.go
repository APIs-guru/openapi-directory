package shared

// GooglePrivacyDlpV2HotwordRule
// The rule that adjusts the likelihood of findings within a certain proximity of hotwords.
type GooglePrivacyDlpV2HotwordRule struct {
	HotwordRegex         *GooglePrivacyDlpV2Regex                `json:"hotwordRegex,omitempty"`
	LikelihoodAdjustment *GooglePrivacyDlpV2LikelihoodAdjustment `json:"likelihoodAdjustment,omitempty"`
	Proximity            *GooglePrivacyDlpV2Proximity            `json:"proximity,omitempty"`
}
