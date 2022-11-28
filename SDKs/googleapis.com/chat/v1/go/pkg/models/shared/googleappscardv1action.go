package shared

type GoogleAppsCardV1ActionInteractionEnum string

const (
	GoogleAppsCardV1ActionInteractionEnumInteractionUnspecified GoogleAppsCardV1ActionInteractionEnum = "INTERACTION_UNSPECIFIED"
	GoogleAppsCardV1ActionInteractionEnumOpenDialog             GoogleAppsCardV1ActionInteractionEnum = "OPEN_DIALOG"
)

type GoogleAppsCardV1ActionLoadIndicatorEnum string

const (
	GoogleAppsCardV1ActionLoadIndicatorEnumSpinner GoogleAppsCardV1ActionLoadIndicatorEnum = "SPINNER"
	GoogleAppsCardV1ActionLoadIndicatorEnumNone    GoogleAppsCardV1ActionLoadIndicatorEnum = "NONE"
)

// GoogleAppsCardV1Action
// An action that describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
type GoogleAppsCardV1Action struct {
	Function      *string                                  `json:"function,omitempty"`
	Interaction   *GoogleAppsCardV1ActionInteractionEnum   `json:"interaction,omitempty"`
	LoadIndicator *GoogleAppsCardV1ActionLoadIndicatorEnum `json:"loadIndicator,omitempty"`
	Parameters    []GoogleAppsCardV1ActionParameter        `json:"parameters,omitempty"`
	PersistValues *bool                                    `json:"persistValues,omitempty"`
}
