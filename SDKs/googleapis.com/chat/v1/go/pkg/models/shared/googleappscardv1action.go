package shared

type GoogleAppsCardV1ActionLoadIndicatorEnum string

const (
	GoogleAppsCardV1ActionLoadIndicatorEnumSpinner GoogleAppsCardV1ActionLoadIndicatorEnum = "SPINNER"
	GoogleAppsCardV1ActionLoadIndicatorEnumNone    GoogleAppsCardV1ActionLoadIndicatorEnum = "NONE"
)

type GoogleAppsCardV1Action struct {
	Function      *string                                  `json:"function,omitempty"`
	LoadIndicator *GoogleAppsCardV1ActionLoadIndicatorEnum `json:"loadIndicator,omitempty"`
	Parameters    []GoogleAppsCardV1ActionParameter        `json:"parameters,omitempty"`
	PersistValues *bool                                    `json:"persistValues,omitempty"`
}
