package shared

type ModifyThreadRequest struct {
	AddLabelIds    []string `json:"addLabelIds,omitempty"`
	RemoveLabelIds []string `json:"removeLabelIds,omitempty"`
}
