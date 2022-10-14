package shared

type Message struct {
	HistoryID    *string      `json:"historyId,omitempty"`
	ID           *string      `json:"id,omitempty"`
	InternalDate *string      `json:"internalDate,omitempty"`
	LabelIds     []string     `json:"labelIds,omitempty"`
	Payload      *MessagePart `json:"payload,omitempty"`
	Raw          *string      `json:"raw,omitempty"`
	SizeEstimate *int32       `json:"sizeEstimate,omitempty"`
	Snippet      *string      `json:"snippet,omitempty"`
	ThreadID     *string      `json:"threadId,omitempty"`
}
