package shared

// GoogleCloudRetailV2betaRuleOnewaySynonymsAction
// Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers".
type GoogleCloudRetailV2betaRuleOnewaySynonymsAction struct {
	OnewayTerms []string `json:"onewayTerms,omitempty"`
	QueryTerms  []string `json:"queryTerms,omitempty"`
	Synonyms    []string `json:"synonyms,omitempty"`
}
