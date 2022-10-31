package shared



type GoogleCloudRetailV2alphaRule struct {
    BoostAction *GoogleCloudRetailV2alphaRuleBoostAction `json:"boostAction,omitempty"`
    Condition *GoogleCloudRetailV2alphaCondition `json:"condition,omitempty"`
    DoNotAssociateAction *GoogleCloudRetailV2alphaRuleDoNotAssociateAction `json:"doNotAssociateAction,omitempty"`
    FilterAction *GoogleCloudRetailV2alphaRuleFilterAction `json:"filterAction,omitempty"`
    IgnoreAction *GoogleCloudRetailV2alphaRuleIgnoreAction `json:"ignoreAction,omitempty"`
    OnewaySynonymsAction *GoogleCloudRetailV2alphaRuleOnewaySynonymsAction `json:"onewaySynonymsAction,omitempty"`
    RedirectAction *GoogleCloudRetailV2alphaRuleRedirectAction `json:"redirectAction,omitempty"`
    ReplacementAction *GoogleCloudRetailV2alphaRuleReplacementAction `json:"replacementAction,omitempty"`
    TwowaySynonymsAction *GoogleCloudRetailV2alphaRuleTwowaySynonymsAction `json:"twowaySynonymsAction,omitempty"`
    
}

