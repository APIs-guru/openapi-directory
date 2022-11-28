package shared

type RoboDirectiveActionTypeEnum string

const (
	RoboDirectiveActionTypeEnumActionTypeUnspecified RoboDirectiveActionTypeEnum = "ACTION_TYPE_UNSPECIFIED"
	RoboDirectiveActionTypeEnumSingleClick           RoboDirectiveActionTypeEnum = "SINGLE_CLICK"
	RoboDirectiveActionTypeEnumEnterText             RoboDirectiveActionTypeEnum = "ENTER_TEXT"
	RoboDirectiveActionTypeEnumIgnore                RoboDirectiveActionTypeEnum = "IGNORE"
)

// RoboDirective
// Directs Robo to interact with a specific UI element if it is encountered during the crawl. Currently, Robo can perform text entry or element click.
type RoboDirective struct {
	ActionType   *RoboDirectiveActionTypeEnum `json:"actionType,omitempty"`
	InputText    *string                      `json:"inputText,omitempty"`
	ResourceName *string                      `json:"resourceName,omitempty"`
}
