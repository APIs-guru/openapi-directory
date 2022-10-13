package shared

type ModifyMessageRequest struct {
	AddLabelIds    []string `json:"addLabelIds"`
	RemoveLabelIds []string `json:"removeLabelIds"`
}
