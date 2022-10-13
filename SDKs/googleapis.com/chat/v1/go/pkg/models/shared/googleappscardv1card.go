package shared

type GoogleAppsCardV1CardDisplayStyleEnum string

const (
	GoogleAppsCardV1CardDisplayStyleEnumDisplayStyleUnspecified GoogleAppsCardV1CardDisplayStyleEnum = "DISPLAY_STYLE_UNSPECIFIED"
	GoogleAppsCardV1CardDisplayStyleEnumPeek                    GoogleAppsCardV1CardDisplayStyleEnum = "PEEK"
	GoogleAppsCardV1CardDisplayStyleEnumReplace                 GoogleAppsCardV1CardDisplayStyleEnum = "REPLACE"
)

type GoogleAppsCardV1Card struct {
	CardActions    []GoogleAppsCardV1CardAction          `json:"cardActions"`
	DisplayStyle   *GoogleAppsCardV1CardDisplayStyleEnum `json:"displayStyle"`
	FixedFooter    *GoogleAppsCardV1CardFixedFooter      `json:"fixedFooter"`
	Header         *GoogleAppsCardV1CardHeader           `json:"header"`
	Name           *string                               `json:"name"`
	PeekCardHeader *GoogleAppsCardV1CardHeader           `json:"peekCardHeader"`
	Sections       []GoogleAppsCardV1Section             `json:"sections"`
}
