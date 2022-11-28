package shared

// GoogleCloudRetailV2betaRuleDoNotAssociateAction
// Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
type GoogleCloudRetailV2betaRuleDoNotAssociateAction struct {
	DoNotAssociateTerms []string `json:"doNotAssociateTerms,omitempty"`
	QueryTerms          []string `json:"queryTerms,omitempty"`
	Terms               []string `json:"terms,omitempty"`
}
