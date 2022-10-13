package shared

type GoogleCloudRetailV2alphaRuleDoNotAssociateAction struct {
	DoNotAssociateTerms []string `json:"doNotAssociateTerms"`
	QueryTerms          []string `json:"queryTerms"`
	Terms               []string `json:"terms"`
}
