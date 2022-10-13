package shared

type GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum string

const (
	GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnumRoleUnspecified GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum = "ROLE_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnumHumanAgent      GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum = "HUMAN_AGENT"
	GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnumAutomatedAgent  GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum = "AUTOMATED_AGENT"
	GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnumEndUser         GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum = "END_USER"
	GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnumAnyAgent        GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum = "ANY_AGENT"
)

type GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum string

const (
	GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnumPhraseMatcherTypeUnspecified GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum = "PHRASE_MATCHER_TYPE_UNSPECIFIED"
	GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnumAllOf                        GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum = "ALL_OF"
	GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnumAnyOf                        GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum = "ANY_OF"
)

type GoogleCloudContactcenterinsightsV1PhraseMatcher struct {
	ActivationUpdateTime  *string                                                       `json:"activationUpdateTime"`
	Active                *bool                                                         `json:"active"`
	DisplayName           *string                                                       `json:"displayName"`
	Name                  *string                                                       `json:"name"`
	PhraseMatchRuleGroups []GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup      `json:"phraseMatchRuleGroups"`
	RevisionCreateTime    *string                                                       `json:"revisionCreateTime"`
	RevisionID            *string                                                       `json:"revisionId"`
	RoleMatch             *GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum `json:"roleMatch"`
	Type                  *GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum      `json:"type"`
	UpdateTime            *string                                                       `json:"updateTime"`
	VersionTag            *string                                                       `json:"versionTag"`
}
