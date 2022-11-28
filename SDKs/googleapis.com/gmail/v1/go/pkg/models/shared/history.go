package shared

// History
// A record of a change to the user's mailbox. Each history change may affect multiple messages in multiple ways.
type History struct {
	ID              *string                 `json:"id,omitempty"`
	LabelsAdded     []HistoryLabelAdded     `json:"labelsAdded,omitempty"`
	LabelsRemoved   []HistoryLabelRemoved   `json:"labelsRemoved,omitempty"`
	Messages        []Message               `json:"messages,omitempty"`
	MessagesAdded   []HistoryMessageAdded   `json:"messagesAdded,omitempty"`
	MessagesDeleted []HistoryMessageDeleted `json:"messagesDeleted,omitempty"`
}
