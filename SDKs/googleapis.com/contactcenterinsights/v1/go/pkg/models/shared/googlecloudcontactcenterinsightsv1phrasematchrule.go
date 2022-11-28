package shared

// GoogleCloudContactcenterinsightsV1PhraseMatchRule
// The data for a phrase match rule.
type GoogleCloudContactcenterinsightsV1PhraseMatchRule struct {
	Config  *GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig `json:"config,omitempty"`
	Negated *bool                                                    `json:"negated,omitempty"`
	Query   *string                                                  `json:"query,omitempty"`
}
