package shared

type GoogleCloudContactcenterinsightsV1PhraseMatchRule struct {
	Config  *GoogleCloudContactcenterinsightsV1PhraseMatchRuleConfig `json:"config"`
	Negated *bool                                                    `json:"negated"`
	Query   *string                                                  `json:"query"`
}
