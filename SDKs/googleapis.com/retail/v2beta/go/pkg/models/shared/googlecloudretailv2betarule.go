package shared

type GoogleCloudRetailV2betaRule struct {
	BoostAction          *GoogleCloudRetailV2betaRuleBoostAction          `json:"boostAction"`
	Condition            *GoogleCloudRetailV2betaCondition                `json:"condition"`
	DoNotAssociateAction *GoogleCloudRetailV2betaRuleDoNotAssociateAction `json:"doNotAssociateAction"`
	FilterAction         *GoogleCloudRetailV2betaRuleFilterAction         `json:"filterAction"`
	IgnoreAction         *GoogleCloudRetailV2betaRuleIgnoreAction         `json:"ignoreAction"`
	OnewaySynonymsAction *GoogleCloudRetailV2betaRuleOnewaySynonymsAction `json:"onewaySynonymsAction"`
	RedirectAction       *GoogleCloudRetailV2betaRuleRedirectAction       `json:"redirectAction"`
	ReplacementAction    *GoogleCloudRetailV2betaRuleReplacementAction    `json:"replacementAction"`
	TwowaySynonymsAction *GoogleCloudRetailV2betaRuleTwowaySynonymsAction `json:"twowaySynonymsAction"`
}
