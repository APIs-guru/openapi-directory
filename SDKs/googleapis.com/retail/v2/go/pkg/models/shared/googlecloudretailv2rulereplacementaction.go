package shared

type GoogleCloudRetailV2RuleReplacementAction struct {
	QueryTerms      []string `json:"queryTerms,omitempty"`
	ReplacementTerm *string  `json:"replacementTerm,omitempty"`
	Term            *string  `json:"term,omitempty"`
}
