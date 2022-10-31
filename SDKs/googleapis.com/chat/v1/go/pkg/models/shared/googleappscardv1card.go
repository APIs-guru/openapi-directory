package shared

type GoogleAppsCardV1CardDisplayStyleEnum string

const (
	GoogleAppsCardV1CardDisplayStyleEnumDisplayStyleUnspecified GoogleAppsCardV1CardDisplayStyleEnum = "DISPLAY_STYLE_UNSPECIFIED"
	GoogleAppsCardV1CardDisplayStyleEnumPeek                    GoogleAppsCardV1CardDisplayStyleEnum = "PEEK"
	GoogleAppsCardV1CardDisplayStyleEnumReplace                 GoogleAppsCardV1CardDisplayStyleEnum = "REPLACE"
)

type GoogleAppsCardV1Card struct {
	CardActions    []GoogleAppsCardV1CardAction          `json:"cardActions,omitempty"`
	DisplayStyle   *GoogleAppsCardV1CardDisplayStyleEnum `json:"displayStyle,omitempty"`
	FixedFooter    *GoogleAppsCardV1CardFixedFooter      `json:"fixedFooter,omitempty"`
	Header         *GoogleAppsCardV1CardHeader           `json:"header,omitempty"`
	Name           *string                               `json:"name,omitempty"`
	PeekCardHeader *GoogleAppsCardV1CardHeader           `json:"peekCardHeader,omitempty"`
	Sections       []GoogleAppsCardV1Section             `json:"sections,omitempty"`
}
