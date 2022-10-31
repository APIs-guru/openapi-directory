package shared

type GooglePrivacyDlpV2HotwordRule struct {
	HotwordRegex         *GooglePrivacyDlpV2Regex                `json:"hotwordRegex,omitempty"`
	LikelihoodAdjustment *GooglePrivacyDlpV2LikelihoodAdjustment `json:"likelihoodAdjustment,omitempty"`
	Proximity            *GooglePrivacyDlpV2Proximity            `json:"proximity,omitempty"`
}
