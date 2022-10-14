package shared

type GoogleCloudRetailV2RuleDoNotAssociateAction struct {
	DoNotAssociateTerms []string `json:"doNotAssociateTerms,omitempty"`
	QueryTerms          []string `json:"queryTerms,omitempty"`
	Terms               []string `json:"terms,omitempty"`
}
