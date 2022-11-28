package shared

// FilterAction
// A set of actions to perform on a message.
type FilterAction struct {
	AddLabelIds    []string `json:"addLabelIds,omitempty"`
	Forward        *string  `json:"forward,omitempty"`
	RemoveLabelIds []string `json:"removeLabelIds,omitempty"`
}
