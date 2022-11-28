package shared

// GoogleCloudRetailV2betaRule
// A rule is a condition-action pair * A condition defines when a rule is to be triggered. * An action specifies what occurs on that trigger. Currently rules only work for controls with SOLUTION_TYPE_SEARCH.
type GoogleCloudRetailV2betaRule struct {
	BoostAction          *GoogleCloudRetailV2betaRuleBoostAction          `json:"boostAction,omitempty"`
	Condition            *GoogleCloudRetailV2betaCondition                `json:"condition,omitempty"`
	DoNotAssociateAction *GoogleCloudRetailV2betaRuleDoNotAssociateAction `json:"doNotAssociateAction,omitempty"`
	FilterAction         *GoogleCloudRetailV2betaRuleFilterAction         `json:"filterAction,omitempty"`
	IgnoreAction         *GoogleCloudRetailV2betaRuleIgnoreAction         `json:"ignoreAction,omitempty"`
	OnewaySynonymsAction *GoogleCloudRetailV2betaRuleOnewaySynonymsAction `json:"onewaySynonymsAction,omitempty"`
	RedirectAction       *GoogleCloudRetailV2betaRuleRedirectAction       `json:"redirectAction,omitempty"`
	ReplacementAction    *GoogleCloudRetailV2betaRuleReplacementAction    `json:"replacementAction,omitempty"`
	TwowaySynonymsAction *GoogleCloudRetailV2betaRuleTwowaySynonymsAction `json:"twowaySynonymsAction,omitempty"`
}
