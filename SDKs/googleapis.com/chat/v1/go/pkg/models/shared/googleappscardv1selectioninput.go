package shared

type GoogleAppsCardV1SelectionInputTypeEnum string

const (
	GoogleAppsCardV1SelectionInputTypeEnumCheckBox    GoogleAppsCardV1SelectionInputTypeEnum = "CHECK_BOX"
	GoogleAppsCardV1SelectionInputTypeEnumRadioButton GoogleAppsCardV1SelectionInputTypeEnum = "RADIO_BUTTON"
	GoogleAppsCardV1SelectionInputTypeEnumSwitch      GoogleAppsCardV1SelectionInputTypeEnum = "SWITCH"
	GoogleAppsCardV1SelectionInputTypeEnumDropdown    GoogleAppsCardV1SelectionInputTypeEnum = "DROPDOWN"
)

type GoogleAppsCardV1SelectionInput struct {
	Items          []GoogleAppsCardV1SelectionItem         `json:"items"`
	Label          *string                                 `json:"label"`
	Name           *string                                 `json:"name"`
	OnChangeAction *GoogleAppsCardV1Action                 `json:"onChangeAction"`
	Type           *GoogleAppsCardV1SelectionInputTypeEnum `json:"type"`
}
