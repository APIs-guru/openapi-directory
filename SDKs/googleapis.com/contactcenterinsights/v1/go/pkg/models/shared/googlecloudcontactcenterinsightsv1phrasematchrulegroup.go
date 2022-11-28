package shared

type GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum string

const (
	GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnumPhraseMatchRuleGroupTypeUnspecified GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum = "PHRASE_MATCH_RULE_GROUP_TYPE_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnumAllOf                               GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum = "ALL_OF"
	GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnumAnyOf                               GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum = "ANY_OF"
)

// GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup
// A message representing a rule in the phrase matcher.
type GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup struct {
	PhraseMatchRules []GoogleCloudContactcenterinsightsV1PhraseMatchRule             `json:"phraseMatchRules,omitempty"`
	Type             *GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroupTypeEnum `json:"type,omitempty"`
}
