package shared

type HistoryLabelAdded struct {
	LabelIds []string `json:"labelIds"`
	Message  *Message `json:"message"`
}
