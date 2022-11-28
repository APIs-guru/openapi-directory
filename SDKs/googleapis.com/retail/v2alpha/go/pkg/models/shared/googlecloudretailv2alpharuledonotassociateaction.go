package shared

// GoogleCloudRetailV2alphaRuleDoNotAssociateAction
// Prevents `query_term` from being associated with specified terms during search. Example: Don't associate "gShoe" and "cheap".
type GoogleCloudRetailV2alphaRuleDoNotAssociateAction struct {
	DoNotAssociateTerms []string `json:"doNotAssociateTerms,omitempty"`
	QueryTerms          []string `json:"queryTerms,omitempty"`
	Terms               []string `json:"terms,omitempty"`
}
