package shared

type GoogleCloudRetailV2alphaRuleReplacementAction struct {
	QueryTerms      []string `json:"queryTerms"`
	ReplacementTerm *string  `json:"replacementTerm"`
	Term            *string  `json:"term"`
}
