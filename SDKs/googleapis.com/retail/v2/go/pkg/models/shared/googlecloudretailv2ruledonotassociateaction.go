package shared

// GoogleCloudRetailV2RuleDoNotAssociateAction
// Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
type GoogleCloudRetailV2RuleDoNotAssociateAction struct {
	DoNotAssociateTerms []string `json:"doNotAssociateTerms,omitempty"`
	QueryTerms          []string `json:"queryTerms,omitempty"`
	Terms               []string `json:"terms,omitempty"`
}
