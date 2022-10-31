package shared




type GoogleAppsCardV1SelectionInputTypeEnum string

const (
    GoogleAppsCardV1SelectionInputTypeEnumCheckBox GoogleAppsCardV1SelectionInputTypeEnum = "CHECK_BOX"
GoogleAppsCardV1SelectionInputTypeEnumRadioButton GoogleAppsCardV1SelectionInputTypeEnum = "RADIO_BUTTON"
GoogleAppsCardV1SelectionInputTypeEnumSwitch GoogleAppsCardV1SelectionInputTypeEnum = "SWITCH"
GoogleAppsCardV1SelectionInputTypeEnumDropdown GoogleAppsCardV1SelectionInputTypeEnum = "DROPDOWN"
)


type GoogleAppsCardV1SelectionInput struct {
    Items []GoogleAppsCardV1SelectionItem `json:"items,omitempty"`
    Label *string `json:"label,omitempty"`
    Name *string `json:"name,omitempty"`
    OnChangeAction *GoogleAppsCardV1Action `json:"onChangeAction,omitempty"`
    Type *GoogleAppsCardV1SelectionInputTypeEnum `json:"type,omitempty"`
    
}

