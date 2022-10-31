package shared

type GoogleCloudRetailV2RuleOnewaySynonymsAction struct {
	OnewayTerms []string `json:"onewayTerms,omitempty"`
	QueryTerms  []string `json:"queryTerms,omitempty"`
	Synonyms    []string `json:"synonyms,omitempty"`
}
