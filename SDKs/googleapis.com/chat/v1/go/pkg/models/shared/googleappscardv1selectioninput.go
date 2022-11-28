package shared

type GoogleAppsCardV1SelectionInputTypeEnum string

const (
	GoogleAppsCardV1SelectionInputTypeEnumCheckBox    GoogleAppsCardV1SelectionInputTypeEnum = "CHECK_BOX"
	GoogleAppsCardV1SelectionInputTypeEnumRadioButton GoogleAppsCardV1SelectionInputTypeEnum = "RADIO_BUTTON"
	GoogleAppsCardV1SelectionInputTypeEnumSwitch      GoogleAppsCardV1SelectionInputTypeEnum = "SWITCH"
	GoogleAppsCardV1SelectionInputTypeEnumDropdown    GoogleAppsCardV1SelectionInputTypeEnum = "DROPDOWN"
)

// GoogleAppsCardV1SelectionInput
// A widget that creates a UI item with options for users to select. For example, a dropdown menu or check list. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect data from users that matches options you set, use a selection input. To collect abstract data from users, use the text input widget instead. Only supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) coming soon.
type GoogleAppsCardV1SelectionInput struct {
	Items          []GoogleAppsCardV1SelectionItem         `json:"items,omitempty"`
	Label          *string                                 `json:"label,omitempty"`
	Name           *string                                 `json:"name,omitempty"`
	OnChangeAction *GoogleAppsCardV1Action                 `json:"onChangeAction,omitempty"`
	Type           *GoogleAppsCardV1SelectionInputTypeEnum `json:"type,omitempty"`
}
