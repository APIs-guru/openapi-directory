package shared

type GoogleCloudRetailV2Rule struct {
	BoostAction          *GoogleCloudRetailV2RuleBoostAction          `json:"boostAction"`
	Condition            *GoogleCloudRetailV2Condition                `json:"condition"`
	DoNotAssociateAction *GoogleCloudRetailV2RuleDoNotAssociateAction `json:"doNotAssociateAction"`
	FilterAction         *GoogleCloudRetailV2RuleFilterAction         `json:"filterAction"`
	IgnoreAction         *GoogleCloudRetailV2RuleIgnoreAction         `json:"ignoreAction"`
	OnewaySynonymsAction *GoogleCloudRetailV2RuleOnewaySynonymsAction `json:"onewaySynonymsAction"`
	RedirectAction       *GoogleCloudRetailV2RuleRedirectAction       `json:"redirectAction"`
	ReplacementAction    *GoogleCloudRetailV2RuleReplacementAction    `json:"replacementAction"`
	TwowaySynonymsAction *GoogleCloudRetailV2RuleTwowaySynonymsAction `json:"twowaySynonymsAction"`
}
