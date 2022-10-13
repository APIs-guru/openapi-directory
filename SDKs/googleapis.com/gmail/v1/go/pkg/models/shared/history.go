package shared

type History struct {
	ID              *string                 `json:"id"`
	LabelsAdded     []HistoryLabelAdded     `json:"labelsAdded"`
	LabelsRemoved   []HistoryLabelRemoved   `json:"labelsRemoved"`
	Messages        []Message               `json:"messages"`
	MessagesAdded   []HistoryMessageAdded   `json:"messagesAdded"`
	MessagesDeleted []HistoryMessageDeleted `json:"messagesDeleted"`
}
