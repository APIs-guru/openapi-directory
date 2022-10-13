package shared

type GoogleAppsCardV1DecoratedText struct {
	BottomLabel   *string                        `json:"bottomLabel"`
	Button        *GoogleAppsCardV1Button        `json:"button"`
	EndIcon       *GoogleAppsCardV1Icon          `json:"endIcon"`
	Icon          *GoogleAppsCardV1Icon          `json:"icon"`
	OnClick       *GoogleAppsCardV1OnClick       `json:"onClick"`
	StartIcon     *GoogleAppsCardV1Icon          `json:"startIcon"`
	SwitchControl *GoogleAppsCardV1SwitchControl `json:"switchControl"`
	Text          *string                        `json:"text"`
	TopLabel      *string                        `json:"topLabel"`
	WrapText      *bool                          `json:"wrapText"`
}
