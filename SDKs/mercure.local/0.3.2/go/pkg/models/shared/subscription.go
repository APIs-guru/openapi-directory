package shared

type Subscription struct {
	AtContext   *string                `json:"@context"`
	Active      bool                   `json:"active"`
	ID          string                 `json:"id"`
	LastEventID *string                `json:"lastEventID"`
	Payload     map[string]interface{} `json:"payload"`
	Subscriber  string                 `json:"subscriber"`
	Topic       string                 `json:"topic"`
	Type        string                 `json:"type"`
}
