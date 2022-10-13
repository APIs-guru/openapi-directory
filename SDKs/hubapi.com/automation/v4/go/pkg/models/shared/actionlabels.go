package shared

type ActionLabels struct {
	ActionCardContent      *string           `json:"actionCardContent"`
	ActionDescription      *string           `json:"actionDescription"`
	ActionName             string            `json:"actionName"`
	AppDisplayName         *string           `json:"appDisplayName"`
	InputFieldDescriptions map[string]string `json:"inputFieldDescriptions"`
	InputFieldLabels       map[string]string `json:"inputFieldLabels"`
}
