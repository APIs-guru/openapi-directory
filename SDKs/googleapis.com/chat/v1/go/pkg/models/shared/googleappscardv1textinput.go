package shared

type GoogleAppsCardV1TextInputTypeEnum string

const (
	GoogleAppsCardV1TextInputTypeEnumSingleLine   GoogleAppsCardV1TextInputTypeEnum = "SINGLE_LINE"
	GoogleAppsCardV1TextInputTypeEnumMultipleLine GoogleAppsCardV1TextInputTypeEnum = "MULTIPLE_LINE"
)

// GoogleAppsCardV1TextInput
// A field in which users can enter text. Supports suggestions and on-change actions. Chat apps receive and can process the value of entered text during form input events. For details about working with form inputs, see [Receive form data](https://developers.google.com/chat/how-tos/dialogs#receive_form_data_from_dialogs). When you need to collect abstract data from users, use a text input. To collect defined data from users, use the selection input widget instead. Only supported in [dialogs](https://developers.google.com/chat/how-tos/dialogs). Support for [card messages](https://developers.google.com/chat/api/guides/message-formats/cards) coming soon.
type GoogleAppsCardV1TextInput struct {
	AutoCompleteAction *GoogleAppsCardV1Action            `json:"autoCompleteAction,omitempty"`
	HintText           *string                            `json:"hintText,omitempty"`
	InitialSuggestions *GoogleAppsCardV1Suggestions       `json:"initialSuggestions,omitempty"`
	Label              *string                            `json:"label,omitempty"`
	Name               *string                            `json:"name,omitempty"`
	OnChangeAction     *GoogleAppsCardV1Action            `json:"onChangeAction,omitempty"`
	Type               *GoogleAppsCardV1TextInputTypeEnum `json:"type,omitempty"`
	Value              *string                            `json:"value,omitempty"`
}
