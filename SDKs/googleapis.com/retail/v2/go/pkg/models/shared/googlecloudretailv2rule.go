package shared

type GoogleCloudRetailV2Rule struct {
	BoostAction          *GoogleCloudRetailV2RuleBoostAction          `json:"boostAction,omitempty"`
	Condition            *GoogleCloudRetailV2Condition                `json:"condition,omitempty"`
	DoNotAssociateAction *GoogleCloudRetailV2RuleDoNotAssociateAction `json:"doNotAssociateAction,omitempty"`
	FilterAction         *GoogleCloudRetailV2RuleFilterAction         `json:"filterAction,omitempty"`
	IgnoreAction         *GoogleCloudRetailV2RuleIgnoreAction         `json:"ignoreAction,omitempty"`
	OnewaySynonymsAction *GoogleCloudRetailV2RuleOnewaySynonymsAction `json:"onewaySynonymsAction,omitempty"`
	RedirectAction       *GoogleCloudRetailV2RuleRedirectAction       `json:"redirectAction,omitempty"`
	ReplacementAction    *GoogleCloudRetailV2RuleReplacementAction    `json:"replacementAction,omitempty"`
	TwowaySynonymsAction *GoogleCloudRetailV2RuleTwowaySynonymsAction `json:"twowaySynonymsAction,omitempty"`
}
