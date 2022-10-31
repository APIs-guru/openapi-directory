package shared

type Thread struct {
	HistoryID *string   `json:"historyId,omitempty"`
	ID        *string   `json:"id,omitempty"`
	Messages  []Message `json:"messages,omitempty"`
	Snippet   *string   `json:"snippet,omitempty"`
}
