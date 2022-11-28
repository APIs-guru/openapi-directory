package shared

// FormAction
// A form action describes the behavior when the form is submitted. For example, an Apps Script can be invoked to handle the form.
type FormAction struct {
	ActionMethodName *string           `json:"actionMethodName,omitempty"`
	Parameters       []ActionParameter `json:"parameters,omitempty"`
}
