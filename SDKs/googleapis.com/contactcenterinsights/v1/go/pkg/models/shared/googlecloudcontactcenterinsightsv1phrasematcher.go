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

// GoogleCloudContactcenterinsightsV1PhraseMatcher
// The phrase matcher resource.
type GoogleCloudContactcenterinsightsV1PhraseMatcher struct {
	ActivationUpdateTime  *string                                                       `json:"activationUpdateTime,omitempty"`
	Active                *bool                                                         `json:"active,omitempty"`
	DisplayName           *string                                                       `json:"displayName,omitempty"`
	Name                  *string                                                       `json:"name,omitempty"`
	PhraseMatchRuleGroups []GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup      `json:"phraseMatchRuleGroups,omitempty"`
	RevisionCreateTime    *string                                                       `json:"revisionCreateTime,omitempty"`
	RevisionID            *string                                                       `json:"revisionId,omitempty"`
	RoleMatch             *GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum `json:"roleMatch,omitempty"`
	Type                  *GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum      `json:"type,omitempty"`
	UpdateTime            *string                                                       `json:"updateTime,omitempty"`
	VersionTag            *string                                                       `json:"versionTag,omitempty"`
}

// GoogleCloudContactcenterinsightsV1PhraseMatcherInput
// The phrase matcher resource.
type GoogleCloudContactcenterinsightsV1PhraseMatcherInput struct {
	Active                *bool                                                         `json:"active,omitempty"`
	DisplayName           *string                                                       `json:"displayName,omitempty"`
	Name                  *string                                                       `json:"name,omitempty"`
	PhraseMatchRuleGroups []GoogleCloudContactcenterinsightsV1PhraseMatchRuleGroup      `json:"phraseMatchRuleGroups,omitempty"`
	RoleMatch             *GoogleCloudContactcenterinsightsV1PhraseMatcherRoleMatchEnum `json:"roleMatch,omitempty"`
	Type                  *GoogleCloudContactcenterinsightsV1PhraseMatcherTypeEnum      `json:"type,omitempty"`
	VersionTag            *string                                                       `json:"versionTag,omitempty"`
}
