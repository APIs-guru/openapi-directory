package shared

type FormAction struct {
	ActionMethodName *string           `json:"actionMethodName"`
	Parameters       []ActionParameter `json:"parameters"`
}
