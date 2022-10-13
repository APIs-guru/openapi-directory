package shared

type BatchModifyMessagesRequest struct {
	AddLabelIds    []string `json:"addLabelIds"`
	Ids            []string `json:"ids"`
	RemoveLabelIds []string `json:"removeLabelIds"`
}
