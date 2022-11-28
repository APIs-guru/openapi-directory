package shared

// GoogleCloudRetailV2RuleOnewaySynonymsAction
// Maps a set of terms to a set of synonyms. Set of synonyms will be treated as synonyms of each query term only. `query_terms` will not be treated as synonyms of each other. Example: "sneakers" will use a synonym of "shoes". "shoes" will not use a synonym of "sneakers".
type GoogleCloudRetailV2RuleOnewaySynonymsAction struct {
	OnewayTerms []string `json:"onewayTerms,omitempty"`
	QueryTerms  []string `json:"queryTerms,omitempty"`
	Synonyms    []string `json:"synonyms,omitempty"`
}
