package shared

type Message struct {
	HistoryID    *string      `json:"historyId"`
	ID           *string      `json:"id"`
	InternalDate *string      `json:"internalDate"`
	LabelIds     []string     `json:"labelIds"`
	Payload      *MessagePart `json:"payload"`
	Raw          *string      `json:"raw"`
	SizeEstimate *int32       `json:"sizeEstimate"`
	Snippet      *string      `json:"snippet"`
	ThreadID     *string      `json:"threadId"`
}
