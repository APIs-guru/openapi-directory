package shared

type GoogleCloudRetailV2RuleDoNotAssociateAction struct {
	DoNotAssociateTerms []string `json:"doNotAssociateTerms"`
	QueryTerms          []string `json:"queryTerms"`
	Terms               []string `json:"terms"`
}
