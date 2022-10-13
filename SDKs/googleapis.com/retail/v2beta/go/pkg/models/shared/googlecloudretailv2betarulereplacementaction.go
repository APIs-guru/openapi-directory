package shared

type GoogleCloudRetailV2betaRuleReplacementAction struct {
	QueryTerms      []string `json:"queryTerms"`
	ReplacementTerm *string  `json:"replacementTerm"`
	Term            *string  `json:"term"`
}
