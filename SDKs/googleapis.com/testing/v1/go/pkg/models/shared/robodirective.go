package shared

type RoboDirectiveActionTypeEnum string

const (
	RoboDirectiveActionTypeEnumActionTypeUnspecified RoboDirectiveActionTypeEnum = "ACTION_TYPE_UNSPECIFIED"
	RoboDirectiveActionTypeEnumSingleClick           RoboDirectiveActionTypeEnum = "SINGLE_CLICK"
	RoboDirectiveActionTypeEnumEnterText             RoboDirectiveActionTypeEnum = "ENTER_TEXT"
	RoboDirectiveActionTypeEnumIgnore                RoboDirectiveActionTypeEnum = "IGNORE"
)

type RoboDirective struct {
	ActionType   *RoboDirectiveActionTypeEnum `json:"actionType"`
	InputText    *string                      `json:"inputText"`
	ResourceName *string                      `json:"resourceName"`
}
