package shared

type ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum string

const (
	ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnumAPIUnspecified ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum = "API_UNSPECIFIED"
	ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnumAPIPreview     ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum = "API_PREVIEW"
	ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnumAPIDevelopment ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum = "API_DEVELOPMENT"
	ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnumAPICurrent     ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum = "API_CURRENT"
	ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnumAPIDeprecated  ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum = "API_DEPRECATED"
)

type ChromeCrosDpanelAutosettingsProtoPolicyAPILifecycle struct {
	Description             *string                                                                         `json:"description"`
	EndSupport              *GoogleTypeDate                                                                 `json:"endSupport"`
	PolicyAPILifecycleStage *ChromeCrosDpanelAutosettingsProtoPolicyAPILifecyclePolicyAPILifecycleStageEnum `json:"policyApiLifecycleStage"`
}
