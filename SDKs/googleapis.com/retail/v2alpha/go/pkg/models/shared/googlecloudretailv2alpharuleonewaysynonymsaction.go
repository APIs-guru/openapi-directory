package shared

type GoogleCloudRetailV2alphaRuleOnewaySynonymsAction struct {
	OnewayTerms []string `json:"onewayTerms"`
	QueryTerms  []string `json:"queryTerms"`
	Synonyms    []string `json:"synonyms"`
}
