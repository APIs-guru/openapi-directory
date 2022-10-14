package shared

type GoogleAppsCardV1SwitchControlControlTypeEnum string

const (
	GoogleAppsCardV1SwitchControlControlTypeEnumSwitch   GoogleAppsCardV1SwitchControlControlTypeEnum = "SWITCH"
	GoogleAppsCardV1SwitchControlControlTypeEnumCheckbox GoogleAppsCardV1SwitchControlControlTypeEnum = "CHECKBOX"
	GoogleAppsCardV1SwitchControlControlTypeEnumCheckBox GoogleAppsCardV1SwitchControlControlTypeEnum = "CHECK_BOX"
)

type GoogleAppsCardV1SwitchControl struct {
	ControlType    *GoogleAppsCardV1SwitchControlControlTypeEnum `json:"controlType,omitempty"`
	Name           *string                                       `json:"name,omitempty"`
	OnChangeAction *GoogleAppsCardV1Action                       `json:"onChangeAction,omitempty"`
	Selected       *bool                                         `json:"selected,omitempty"`
	Value          *string                                       `json:"value,omitempty"`
}
