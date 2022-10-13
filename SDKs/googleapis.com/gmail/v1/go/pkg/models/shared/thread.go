package shared

type Thread struct {
	HistoryID *string   `json:"historyId"`
	ID        *string   `json:"id"`
	Messages  []Message `json:"messages"`
	Snippet   *string   `json:"snippet"`
}
