package shared

type GoogleAppsCardV1WidgetHorizontalAlignmentEnum string

const (
	GoogleAppsCardV1WidgetHorizontalAlignmentEnumHorizontalAlignmentUnspecified GoogleAppsCardV1WidgetHorizontalAlignmentEnum = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
	GoogleAppsCardV1WidgetHorizontalAlignmentEnumStart                          GoogleAppsCardV1WidgetHorizontalAlignmentEnum = "START"
	GoogleAppsCardV1WidgetHorizontalAlignmentEnumCenter                         GoogleAppsCardV1WidgetHorizontalAlignmentEnum = "CENTER"
	GoogleAppsCardV1WidgetHorizontalAlignmentEnumEnd                            GoogleAppsCardV1WidgetHorizontalAlignmentEnum = "END"
)

type GoogleAppsCardV1Widget struct {
	ButtonList          *GoogleAppsCardV1ButtonList                    `json:"buttonList,omitempty"`
	DateTimePicker      *GoogleAppsCardV1DateTimePicker                `json:"dateTimePicker,omitempty"`
	DecoratedText       *GoogleAppsCardV1DecoratedText                 `json:"decoratedText,omitempty"`
	Divider             map[string]interface{}                         `json:"divider,omitempty"`
	Grid                *GoogleAppsCardV1Grid                          `json:"grid,omitempty"`
	HorizontalAlignment *GoogleAppsCardV1WidgetHorizontalAlignmentEnum `json:"horizontalAlignment,omitempty"`
	Image               *GoogleAppsCardV1Image                         `json:"image,omitempty"`
	SelectionInput      *GoogleAppsCardV1SelectionInput                `json:"selectionInput,omitempty"`
	TextInput           *GoogleAppsCardV1TextInput                     `json:"textInput,omitempty"`
	TextParagraph       *GoogleAppsCardV1TextParagraph                 `json:"textParagraph,omitempty"`
}
