package shared

type FormAction struct {
	ActionMethodName *string           `json:"actionMethodName,omitempty"`
	Parameters       []ActionParameter `json:"parameters,omitempty"`
}
