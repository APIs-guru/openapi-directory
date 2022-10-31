package shared

type History struct {
	ID              *string                 `json:"id,omitempty"`
	LabelsAdded     []HistoryLabelAdded     `json:"labelsAdded,omitempty"`
	LabelsRemoved   []HistoryLabelRemoved   `json:"labelsRemoved,omitempty"`
	Messages        []Message               `json:"messages,omitempty"`
	MessagesAdded   []HistoryMessageAdded   `json:"messagesAdded,omitempty"`
	MessagesDeleted []HistoryMessageDeleted `json:"messagesDeleted,omitempty"`
}
