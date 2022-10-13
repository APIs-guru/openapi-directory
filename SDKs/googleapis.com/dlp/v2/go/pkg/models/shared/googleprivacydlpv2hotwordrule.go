package shared

type GooglePrivacyDlpV2HotwordRule struct {
	HotwordRegex         *GooglePrivacyDlpV2Regex                `json:"hotwordRegex"`
	LikelihoodAdjustment *GooglePrivacyDlpV2LikelihoodAdjustment `json:"likelihoodAdjustment"`
	Proximity            *GooglePrivacyDlpV2Proximity            `json:"proximity"`
}
