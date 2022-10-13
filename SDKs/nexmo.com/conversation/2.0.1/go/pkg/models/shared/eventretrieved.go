package shared

type EventRetrieved struct {
	Body      map[string]interface{} `json:"body"`
	From      *string                `json:"from"`
	Href      string                 `json:"href"`
	ID        string                 `json:"id"`
	State     *MemberStateEnum       `json:"state"`
	Timestamp string                 `json:"timestamp"`
	To        *string                `json:"to"`
	Type      string                 `json:"type"`
}
