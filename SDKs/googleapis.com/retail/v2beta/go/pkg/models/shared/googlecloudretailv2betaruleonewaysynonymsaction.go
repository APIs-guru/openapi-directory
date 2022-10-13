package shared

type GoogleCloudRetailV2betaRuleOnewaySynonymsAction struct {
	OnewayTerms []string `json:"onewayTerms"`
	QueryTerms  []string `json:"queryTerms"`
	Synonyms    []string `json:"synonyms"`
}
