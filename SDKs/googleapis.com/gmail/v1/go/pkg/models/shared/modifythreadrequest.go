package shared

type ModifyThreadRequest struct {
	AddLabelIds    []string `json:"addLabelIds"`
	RemoveLabelIds []string `json:"removeLabelIds"`
}
