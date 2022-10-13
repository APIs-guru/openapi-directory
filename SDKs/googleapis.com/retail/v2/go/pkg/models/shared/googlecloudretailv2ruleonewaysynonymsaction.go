package shared

type GoogleCloudRetailV2RuleOnewaySynonymsAction struct {
	OnewayTerms []string `json:"onewayTerms"`
	QueryTerms  []string `json:"queryTerms"`
	Synonyms    []string `json:"synonyms"`
}
