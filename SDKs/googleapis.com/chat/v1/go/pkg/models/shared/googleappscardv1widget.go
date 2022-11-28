package shared

// GoogleAppsCardV1Widget
// Each card is made up of widgets. A widget is a composite object that can represent one of text, images, buttons, and other object types.
type GoogleAppsCardV1Widget struct {
	ButtonList     *GoogleAppsCardV1ButtonList     `json:"buttonList,omitempty"`
	DateTimePicker *GoogleAppsCardV1DateTimePicker `json:"dateTimePicker,omitempty"`
	DecoratedText  *GoogleAppsCardV1DecoratedText  `json:"decoratedText,omitempty"`
	Divider        map[string]interface{}          `json:"divider,omitempty"`
	Grid           *GoogleAppsCardV1Grid           `json:"grid,omitempty"`
	Image          *GoogleAppsCardV1Image          `json:"image,omitempty"`
	SelectionInput *GoogleAppsCardV1SelectionInput `json:"selectionInput,omitempty"`
	TextInput      *GoogleAppsCardV1TextInput      `json:"textInput,omitempty"`
	TextParagraph  *GoogleAppsCardV1TextParagraph  `json:"textParagraph,omitempty"`
}
