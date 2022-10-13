package shared

type FilterAction struct {
	AddLabelIds    []string `json:"addLabelIds"`
	Forward        *string  `json:"forward"`
	RemoveLabelIds []string `json:"removeLabelIds"`
}
