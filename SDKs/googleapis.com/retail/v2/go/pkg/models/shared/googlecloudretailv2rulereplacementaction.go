package shared

type GoogleCloudRetailV2RuleReplacementAction struct {
	QueryTerms      []string `json:"queryTerms"`
	ReplacementTerm *string  `json:"replacementTerm"`
	Term            *string  `json:"term"`
}
