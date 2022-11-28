package shared

// GoogleAppsCardV1DecoratedText
// A widget that displays text with optional decorations such as a label above or below the text, an icon in front of the text, a selection widget or a button after the text.
type GoogleAppsCardV1DecoratedText struct {
	BottomLabel   *string                        `json:"bottomLabel,omitempty"`
	Button        *GoogleAppsCardV1Button        `json:"button,omitempty"`
	EndIcon       *GoogleAppsCardV1Icon          `json:"endIcon,omitempty"`
	Icon          *GoogleAppsCardV1Icon          `json:"icon,omitempty"`
	OnClick       *GoogleAppsCardV1OnClick       `json:"onClick,omitempty"`
	StartIcon     *GoogleAppsCardV1Icon          `json:"startIcon,omitempty"`
	SwitchControl *GoogleAppsCardV1SwitchControl `json:"switchControl,omitempty"`
	Text          *string                        `json:"text,omitempty"`
	TopLabel      *string                        `json:"topLabel,omitempty"`
	WrapText      *bool                          `json:"wrapText,omitempty"`
}
