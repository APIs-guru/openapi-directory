package shared

// GoogleCloudRetailV2alphaRuleReplacementAction
// Replaces a term in the query. Multiple replacement candidates can be specified. All `query_terms` will be replaced with the replacement term. Example: Replace "gShoe" with "google shoe".
type GoogleCloudRetailV2alphaRuleReplacementAction struct {
	QueryTerms      []string `json:"queryTerms,omitempty"`
	ReplacementTerm *string  `json:"replacementTerm,omitempty"`
	Term            *string  `json:"term,omitempty"`
}
