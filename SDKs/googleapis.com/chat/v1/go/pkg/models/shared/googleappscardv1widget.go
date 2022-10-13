package shared

type GoogleAppsCardV1WidgetHorizontalAlignmentEnum string

const (
	GoogleAppsCardV1WidgetHorizontalAlignmentEnumHorizontalAlignmentUnspecified GoogleAppsCardV1WidgetHorizontalAlignmentEnum = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
	GoogleAppsCardV1WidgetHorizontalAlignmentEnumStart                          GoogleAppsCardV1WidgetHorizontalAlignmentEnum = "START"
	GoogleAppsCardV1WidgetHorizontalAlignmentEnumCenter                         GoogleAppsCardV1WidgetHorizontalAlignmentEnum = "CENTER"
	GoogleAppsCardV1WidgetHorizontalAlignmentEnumEnd                            GoogleAppsCardV1WidgetHorizontalAlignmentEnum = "END"
)

type GoogleAppsCardV1Widget struct {
	ButtonList          *GoogleAppsCardV1ButtonList                    `json:"buttonList"`
	DateTimePicker      *GoogleAppsCardV1DateTimePicker                `json:"dateTimePicker"`
	DecoratedText       *GoogleAppsCardV1DecoratedText                 `json:"decoratedText"`
	Divider             map[string]interface{}                         `json:"divider"`
	Grid                *GoogleAppsCardV1Grid                          `json:"grid"`
	HorizontalAlignment *GoogleAppsCardV1WidgetHorizontalAlignmentEnum `json:"horizontalAlignment"`
	Image               *GoogleAppsCardV1Image                         `json:"image"`
	SelectionInput      *GoogleAppsCardV1SelectionInput                `json:"selectionInput"`
	TextInput           *GoogleAppsCardV1TextInput                     `json:"textInput"`
	TextParagraph       *GoogleAppsCardV1TextParagraph                 `json:"textParagraph"`
}
