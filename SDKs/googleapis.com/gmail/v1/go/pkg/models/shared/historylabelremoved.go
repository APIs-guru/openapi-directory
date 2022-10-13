package shared

type HistoryLabelRemoved struct {
	LabelIds []string `json:"labelIds"`
	Message  *Message `json:"message"`
}
