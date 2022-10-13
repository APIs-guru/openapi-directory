package shared

type GoogleCloudRetailV2alphaRule struct {
	BoostAction          *GoogleCloudRetailV2alphaRuleBoostAction          `json:"boostAction"`
	Condition            *GoogleCloudRetailV2alphaCondition                `json:"condition"`
	DoNotAssociateAction *GoogleCloudRetailV2alphaRuleDoNotAssociateAction `json:"doNotAssociateAction"`
	FilterAction         *GoogleCloudRetailV2alphaRuleFilterAction         `json:"filterAction"`
	IgnoreAction         *GoogleCloudRetailV2alphaRuleIgnoreAction         `json:"ignoreAction"`
	OnewaySynonymsAction *GoogleCloudRetailV2alphaRuleOnewaySynonymsAction `json:"onewaySynonymsAction"`
	RedirectAction       *GoogleCloudRetailV2alphaRuleRedirectAction       `json:"redirectAction"`
	ReplacementAction    *GoogleCloudRetailV2alphaRuleReplacementAction    `json:"replacementAction"`
	TwowaySynonymsAction *GoogleCloudRetailV2alphaRuleTwowaySynonymsAction `json:"twowaySynonymsAction"`
}
