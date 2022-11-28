package shared

type GoogleAppsCardV1SwitchControlControlTypeEnum string

const (
	GoogleAppsCardV1SwitchControlControlTypeEnumSwitch   GoogleAppsCardV1SwitchControlControlTypeEnum = "SWITCH"
	GoogleAppsCardV1SwitchControlControlTypeEnumCheckbox GoogleAppsCardV1SwitchControlControlTypeEnum = "CHECKBOX"
	GoogleAppsCardV1SwitchControlControlTypeEnumCheckBox GoogleAppsCardV1SwitchControlControlTypeEnum = "CHECK_BOX"
)

// GoogleAppsCardV1SwitchControl
// Either a toggle-style switch or a checkbox inside a `decoratedText` widget. Only supported on the `decoratedText` widget. Currently supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) is coming soon.
type GoogleAppsCardV1SwitchControl struct {
	ControlType    *GoogleAppsCardV1SwitchControlControlTypeEnum `json:"controlType,omitempty"`
	Name           *string                                       `json:"name,omitempty"`
	OnChangeAction *GoogleAppsCardV1Action                       `json:"onChangeAction,omitempty"`
	Selected       *bool                                         `json:"selected,omitempty"`
	Value          *string                                       `json:"value,omitempty"`
}
