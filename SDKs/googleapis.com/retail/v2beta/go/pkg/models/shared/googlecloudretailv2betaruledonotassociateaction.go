package shared

type GoogleCloudRetailV2betaRuleDoNotAssociateAction struct {
	DoNotAssociateTerms []string `json:"doNotAssociateTerms"`
	QueryTerms          []string `json:"queryTerms"`
	Terms               []string `json:"terms"`
}
